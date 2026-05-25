// Testimonials + Gallery + Footer

/* ---------- TESTIMONIALS ---------- */
const TESTIMONIALS = [
  { text: "Неймовірне місце! Рибалили з чоловіком від світанку до заходу — зловили кілька великих коропів. Будиночок затишний, усе продумано до дрібниць.", name: "Олена Коваль", role: "Гість 2024", img: "https://randomuser.me/api/portraits/women/1.jpg" },
  { text: "Приїхали сім'єю з дітьми на три дні. Діти були у захваті від озера, дорослі — від тиші і краси природи. Однозначно повернемося!", name: "Тарас Бондар", role: "Сімейний відпочинок", img: "https://randomuser.me/api/portraits/men/2.jpg" },
  { text: "Вечори біля вогнища, ранкова рибалка в тумані, зорі над озером — все це Бакшала. Рекомендую кожному, хто втомився від міста.", name: "Марія Шевченко", role: "Постійний гість", img: "https://randomuser.me/api/portraits/women/3.jpg" },
  { text: "Приватне озеро — це щось! Нікого зайвого, тільки ти і природа. Рибалив цілодобово, взяв спорядження в оренду прямо на місці.", name: "Іван Мельник", role: "Рибалка-любитель", img: "https://randomuser.me/api/portraits/men/4.jpg" },
  { text: "Чудова атмосфера, привітні господарі та неймовірна природа. Будиночок люкс — окрема пісня: камін, панорамні вікна, вигляд на озеро.", name: "Наталія Лисенко", role: "Відпочинок 2024", img: "https://randomuser.me/api/portraits/women/5.jpg" },
  { text: "Були з компанією друзів — зняли два будиночки. Рибальський турнір улаштували самі, але господарі допомогли з організацією. Супер!", name: "Олексій Петренко", role: "Групова поїздка", img: "https://randomuser.me/api/portraits/men/6.jpg" },
  { text: "Свіже повітря, тиша, озеро під вікном — ось що таке справжній відпочинок. Поверталася додому з купою сил та гарних спогадів.", name: "Вікторія Кравченко", role: "Гість 2023", img: "https://randomuser.me/api/portraits/women/7.jpg" },
  { text: "Краще місце для риболовлі важко знайти. Щука клюнула буквально через 15 хвилин після закидання! Озеро насправді рибне.", name: "Дмитро Сидоренко", role: "Постійний гість", img: "https://randomuser.me/api/portraits/men/8.jpg" },
  { text: "Захід сонця над озером — це щось нереальне. Сиділи з дружиною на терасі і просто мовчали. Саме такий відпочинок нам і був потрібен.", name: "Андрій Романенко", role: "Медовий місяць", img: "https://randomuser.me/api/portraits/men/9.jpg" },
];

function TestimonialCard({ t }) {
  return (
    <div className="t-card">
      <div className="quote">«{t.text}»</div>
      <div className="who">
        <img src={t.img} alt={t.name} loading="lazy"/>
        <div>
          <div className="name">{t.name}</div>
          <div className="role">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  // Split into 3 columns, duplicate for seamless loop
  const cols = [[], [], []];
  TESTIMONIALS.forEach((t, i) => cols[i % 3].push(t));
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head reveal">
          <div className="divider-line"></div>
          <div className="overline">Відгуки гостей</div>
          <h2>Що кажуть <em>наші гості</em></h2>
          <p>Реальні враження людей, які вже відпочили на Бакшалі.</p>
        </div>

        <div className="t-columns reveal">
          {cols.map((col, i) => (
            <div key={i} className={"t-col " + (i === 1 ? "down" : i === 0 ? "up" : "up2")}>
              {[...col, ...col].map((t, j) => <TestimonialCard t={t} key={j}/>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
const GALLERY = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&fit=crop",
  "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=900&fit=crop",
  "https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=900&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&fit=crop",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=900&fit=crop",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&fit=crop",
  "https://images.unsplash.com/photo-1455218873509-8097305ee378?w=900&fit=crop",
];

function Gallery() {
  const [idx, setIdx] = useState(null);
  const open = idx !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % GALLERY.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + GALLERY.length) % GALLERY.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-head reveal">
          <div className="divider-line"></div>
          <div className="overline">Галерея</div>
          <h2>Атмосфера <em>Бакшали</em></h2>
          <p>Природа, відпочинок і незабутні моменти.</p>
        </div>

        <div className="gallery-grid reveal">
          {GALLERY.map((src, i) => (
            <button key={i} className="g-item" onClick={() => setIdx(i)}>
              <img src={src} alt={"Бакшала " + (i + 1)} loading="lazy"/>
              <span className="g-zoom"><IZoomIn size={22} stroke={1.4}/></span>
            </button>
          ))}
        </div>
      </div>

      <div className={"lightbox" + (open ? " open" : "")} onClick={() => setIdx(null)}>
        {open && (
          <>
            <img src={GALLERY[idx]} alt="" onClick={(e) => e.stopPropagation()}/>
            <button className="lb-close" onClick={() => setIdx(null)} aria-label="Закрити"><IClose size={20}/></button>
            <button className="lb-prev" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + GALLERY.length) % GALLERY.length); }} aria-label="Попереднє"><IChevLeft size={22}/></button>
            <button className="lb-next" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % GALLERY.length); }} aria-label="Наступне"><IChevRight size={22}/></button>
          </>
        )}
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer-grid">
          <div className="f-brand">
            <div className="brand" style={{color:"#fff"}}>Ранчо <span style={{color:"var(--gold)"}}>Бакшала</span></div>
            <p className="f-tag">Відпочинок на березі озера в&nbsp;серці природи.</p>
            <div className="f-socials">
              <a href="#" aria-label="Instagram"><IInstagram size={18}/></a>
              <a href="#" aria-label="Facebook"><IFacebook size={18}/></a>
              <a href="#" aria-label="Telegram"><ISend size={18}/></a>
            </div>
          </div>
          <div className="f-col">
            <h5>Навігація</h5>
            <ul>
              <li><a href="#about">Про нас</a></li>
              <li><a href="#houses">Будиночки</a></li>
              <li><a href="#fishing">Рибалка</a></li>
              <li><a href="#lake">Озеро</a></li>
              <li><a href="#gallery">Беседки</a></li>
              <li><a href="#contacts">Контакти</a></li>
            </ul>
          </div>
          <div className="f-col">
            <h5>Контакти</h5>
            <ul>
              <li className="f-contact-row"><IPhone size={16}/> <span>+38 (067) 123-45-67<br/><span style={{color:"rgba(255,255,255,.5)"}}>Щодня · 08:00 — 22:00</span></span></li>
              <li className="f-contact-row"><IMail size={16}/> <span>info@bakshala.com.ua<br/><span style={{color:"rgba(255,255,255,.5)"}}>Бронювання та запити</span></span></li>
              <li className="f-contact-row"><IMapPin size={16}/> <span>Україна, Вінницька обл.<br/>с. Бакшала</span></li>
            </ul>
          </div>
        </div>
      </div>
      <iframe
        className="f-map"
        src="https://maps.google.com/maps?q=48.9,28.8&z=13&output=embed"
        title="Мапа"
        loading="lazy"
        allowFullScreen
      ></iframe>
      <div className="container">
        <div className="f-bottom">
          <div>© 2025 Ранчо «Бакшала». Усі права захищені.</div>
          <div>Розроблено в Україні 🇺🇦</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Testimonials, Gallery, Footer });
