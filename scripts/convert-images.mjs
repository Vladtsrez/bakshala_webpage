import sharp from 'sharp'
import { readdir, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC = path.join(__dirname, '../public')

// hero/full-width images → max 1920px wide, quality 82
// gallery/section images → max 1400px wide, quality 80
const CONFIG = {
  'Hero.jpg':          { width: 1920, quality: 82 },
  'pier-hero.jpg':     { width: 1920, quality: 82 },
  'Leisure-hero.JPG':  { width: 1920, quality: 82 },
  'House-hero.JPG':    { width: 1920, quality: 82 },
  'fishing.jpg':       { width: 1600, quality: 80 },
  'Озеро.JPG':         { width: 1600, quality: 80 },
  'Rod.jpg':           { width: 1200, quality: 80 },
}

// Everything else (House-*, Leisure-*, pier-*) → gallery size
const GALLERY_WIDTH = 1400
const GALLERY_QUALITY = 80

const SKIP = ['favicon.svg', 'icons.svg', '404.html']

async function convert() {
  const files = await readdir(PUBLIC)
  const images = files.filter(f =>
    /\.(jpe?g|JPG|JPEG|png|PNG|webp)$/i.test(f) && !SKIP.includes(f)
  )

  console.log(`Found ${images.length} images to convert...\n`)
  let saved = 0

  for (const file of images) {
    const cfg = CONFIG[file] ?? { width: GALLERY_WIDTH, quality: GALLERY_QUALITY }
    const input = path.join(PUBLIC, file)
    const outName = file.replace(/\.(jpe?g|JPG|JPEG|png|PNG)$/i, '.webp')
    const output = path.join(PUBLIC, outName)

    const before = (await sharp(input).metadata()).size ?? 0

    await sharp(input)
      .resize({ width: cfg.width, withoutEnlargement: true })
      .webp({ quality: cfg.quality, effort: 6 })
      .toFile(output)

    const { size: after } = await sharp(output).metadata()
    const pct = Math.round((1 - after / before) * 100)
    saved += before - after
    console.log(`  ${file} → ${outName}  (${(before/1e6).toFixed(1)}MB → ${(after/1e6).toFixed(1)}MB, -${pct}%)`)
  }

  console.log(`\nTotal saved: ${(saved/1e6).toFixed(1)} MB`)
}

convert().catch(console.error)
