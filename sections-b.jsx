// About + Fishing + Parallax (Lake/Territory)

/* ---------- ABOUT ---------- */
const SERVICES = [
  ["Рибалка", "Власне озеро, цілодобовий доступ", IFish],
  ["Проживання", "4 затишних будиночки", IBed],
  ["Озеро", "Чиста вода, пірси, човни", IWaves],
  ["Природа", "5 гектарів власної території", ILeaf],
  ["Дозвілля", "Беседки, вогнище, активності", IFlame],
  ["Кухня", "Локальні страви, авторське меню", IUtensils],
];

function About() {
  return (
    <section className="section" id="about" style={{background: "var(--bg-soft)"}}>
      <div className="container">
        <div className="section-head reveal">
          <div className="divider-line"></div>
          <div className="overline">Наша історія</div>
          <h2>Про <em>нас</em></h2>
          <p>
            Ранчо «Бакшала» — це місце, де природа, тиша та затишок поєднуються
            в одне незабутнє враження. Ми пропонуємо відпочинок на березі власного озера,
            рибальські пригоди на світанку, вечори біля вогнища та справжній спокій
            далеко від міського шуму.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-col">
            {SERVICES.slice(0, 3).map(([name, desc, Ico], i) => (
              <div className="service-card reveal" key={i}>
                <div className="ico"><Ico size={20} stroke={1.5}/></div>
                <div>
                  <h4>{name}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="about-img reveal d2">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=900&fit=crop" alt="Природа Бакшали" loading="lazy"/>
          </div>
          <div className="about-col right">
            {SERVICES.slice(3, 6).map(([name, desc, Ico], i) => (
              <div className="service-card reveal" key={i} style={{flexDirection: "row-reverse", textAlign: "right"}}>
                <div className="ico"><Ico size={20} stroke={1.5}/></div>
                <div>
                  <h4>{name}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-stats reveal">
          {[
            ["120+", "Задоволених гостей"],
            ["5 га", "Власна територія"],
            ["1", "Власне озеро"],
            ["4", "Затишних будиночки"],
          ].map(([n, l], i) => (
            <div className="stat" key={i}>
              <div className="num">{n}</div>
              <div className="label">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FISHING ---------- */
function Fishing() {
  return (
    <section className="section fishing" id="fishing">
      <div className="container">
        <div className="fishing-grid">
          <div className="fishing-img reveal">
            <img src="https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=900&h=600&fit=crop" alt="Рибалка на озері" loading="lazy"/>
          </div>
          <div className="fishing-info reveal d1">
            <span className="overline">Рибальський рай</span>
            <h2>Озеро, <em>де клює</em> завжди</h2>
            <p>
              Наше приватне озеро площею 5 гектарів — справжній рай для рибалок. Тут
              водяться короп, щука, карась та лящ. Прозора вода, тихі береги і ранковий
              туман над поверхнею створюють неповторну атмосферу.
            </p>
            <p>
              Ми пропонуємо оренду спорядження, обладнані рибальські місця та можливість
              рибалити цілодобово. Для груп організовуємо рибальські турніри.
            </p>
            <ul className="feat-list">
              <li><IFish size={18}/> Короп, щука, карась, лящ</li>
              <li><ISunrise size={18}/> Рибалка цілодобово</li>
              <li><ITarget size={18}/> Оренда спорядження</li>
              <li><IStar size={18}/> Рибальські турніри</li>
            </ul>
            <a href="#lake" className="link-arrow">Детально про рибалку <IArrowRight size={14}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ZOOM PARALLAX (Lake/Territory) ---------- */
const PARALLAX_IMAGES = [
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1280&h=720&fit=crop",
  "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1280&h=720&fit=crop",
  "https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?w=1280&h=720&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop",
  "https://images.unsplash.com/photo-1455218873509-8097305ee378?w=1280&h=720&fit=crop",
];

// Each image targets a specific zoom multiplier at the end of scroll
const SCALES = [4, 5, 6, 5, 6, 8, 9];

function ZoomParallax() {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="section" id="lake" style={{paddingBottom: 60}}>
        <div className="container">
          <div className="section-head reveal">
            <div className="divider-line"></div>
            <div className="overline">Озеро та територія</div>
            <h2>П'ять гектарів <em>краси</em></h2>
            <p>
              Власне озеро, берегова лінія, лісова зона та простір для відпочинку. Прокрутіть,
              щоб відчути простір крізь оптику нашого об'єктива.
            </p>
          </div>
        </div>
      </section>

      <div className="parallax-wrap" ref={wrapRef}>
        <div className="parallax-sticky">
          {PARALLAX_IMAGES.map((src, i) => {
            const scale = 1 + progress * (SCALES[i] - 1);
            return (
              <div
                key={i}
                className={"parallax-item p-" + i}
                style={{
                  transform: (i === 0 || i === 5)
                    ? `translate(-50%, -50%) scale(${scale})`
                    : `scale(${scale})`,
                }}
              >
                <img src={src} alt="" loading="lazy"/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

Object.assign(window, { About, Fishing, ZoomParallax });
