// Header + Hero + Houses
const { useState, useEffect, useRef } = React;

/* ---------- Reveal hook ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

/* ---------- HEADER ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Про нас", "#about"],
    ["Будиночки", "#houses"],
    ["Рибалка", "#fishing"],
    ["Озеро", "#lake"],
    ["Беседки", "#gallery"],
    ["Контакти", "#contacts"],
  ];
  return (
    <>
      <header className={"header" + (scrolled ? " scrolled" : "")}>
        <div className="header-inner">
          <a href="#top" className="brand">Ранчо&nbsp;<span>Бакшала</span></a>
          <nav className="nav">
            {links.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
          </nav>
          <a href="#houses" className="cta-outline">Забронювати</a>
          <button className="hamburger" onClick={() => setOpen(true)} aria-label="Меню">
            <span></span>
          </button>
        </div>
      </header>
      <div className={"mobile-drawer" + (open ? " open" : "")}>
        <div className="row">
          <span className="brand">Ранчо <span style={{color:"var(--gold)"}}>Бакшала</span></span>
          <button onClick={() => setOpen(false)} aria-label="Закрити" style={{width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <IClose size={22}/>
          </button>
        </div>
        <nav>
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <a href="#houses" className="cta-outline" style={{marginTop:48,alignSelf:"flex-start"}} onClick={() => setOpen(false)}>Забронювати</a>
      </div>
    </>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop" alt=""/>
      </div>
      <div className="hero-overlay"/>
      <div className="hero-content">
        <div className="overline reveal in">Природа · Відпочинок · Рибалка</div>
        <h1 className="reveal in d1">
          Ваш відпочинок<br/>
          серед <em className="gold">природи</em><br/>
          на берегах озера
        </h1>
        <p className="sub reveal in d2">
          Затишні будиночки, власне озеро та незабутня рибалка в&nbsp;серці України.
        </p>
        <div className="reveal in d3" style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
          <a href="#houses" className="btn-hero" style={{background:"var(--sand)",color:"#fff",borderColor:"var(--sand)",borderRadius:999}}>Переглянути будиночки</a>
          <a href="#about" className="btn-hero" style={{borderRadius:999}}>Дізнатись більше</a>
        </div>
      </div>
      <a href="#houses" className="scroll-cue" aria-label="Прокрутити">
        <span>SCROLL</span>
        <span className="chev"></span>
      </a>
    </section>
  );
}

/* ---------- HOUSES ---------- */
const HOUSES = [
  {
    name: "Будиночок №1",
    short: "Будиночок №1",
    cap: "2–3 особи · 35 м²",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&h=600&fit=crop",
    desc: "Затишний будиночок з видом на озеро. Ідеальний для пари або невеликої сім'ї.",
    price: "1 800",
    amenities: [["Wi-Fi", IWifi],["Душ", IBath],["Кухня", ICoffee],["Мангал", IFlame],["Паркінг", ICar]],
  },
  {
    name: "Будиночок №2",
    short: "Будиночок №2",
    cap: "2–4 особи · 45 м²",
    img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&h=600&fit=crop",
    desc: "Просторий будиночок з терасою та прямим виходом до берега озера.",
    price: "2 200",
    amenities: [["Wi-Fi", IWifi],["Ванна", IBath],["Кухня", ICoffee],["Мангал", IFlame],["Тераса", IWaves]],
  },
  {
    name: "Будиночок №3",
    short: "Будиночок №3",
    cap: "4–6 осіб · 60 м²",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=600&fit=crop",
    desc: "Великий будиночок для сімейного відпочинку з просторою вітальнею.",
    price: "2 800",
    amenities: [["Wi-Fi", IWifi],["Ванна", IBath],["Кухня", ICoffee],["Мангал", IFlame],["Дитяче місце", IUsers]],
  },
  {
    name: "Люкс Коттедж",
    short: "Люкс Коттедж",
    cap: "2–4 особи · 80 м²",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&h=600&fit=crop",
    desc: "Преміальний коттедж з панорамними вікнами, каміном та приватним причалом.",
    price: "4 500",
    amenities: [["Wi-Fi", IWifi],["Джакузі", IBath],["Кухня", ICoffee],["Камін", IFlame],["Причал", IWaves]],
  },
];

function Houses() {
  const [active, setActive] = useState(0);
  const h = HOUSES[active];
  return (
    <section className="section" id="houses">
      <div className="container">
        <div className="section-head reveal">
          <div className="divider-line"></div>
          <div className="overline">Проживання</div>
          <h2>Оберіть свій <em>будиночок</em></h2>
          <p>Чотири затишних простори для відпочинку — кожен зі своїм характером.</p>
        </div>

        <div className="tabs reveal">
          {HOUSES.map((it, i) => (
            <button key={i} className={"tab" + (active === i ? " active" : "")} onClick={() => setActive(i)}>
              {it.short}
            </button>
          ))}
        </div>

        <div className="house-panel" key={active}>
          <div className="house-img-wrap reveal">
            <span className="house-badge">№ 0{active + 1} / 04</span>
            <img src={h.img} alt={h.name} loading="lazy"/>
          </div>
          <div className="house-info reveal d1">
            <span className="overline">Розкішне проживання</span>
            <h3>{h.name}</h3>
            <div className="cap"><IUsers size={16}/> {h.cap}</div>
            <p className="desc">{h.desc}</p>
            <div className="amenities">
              {h.amenities.map(([label, Ico], i) => (
                <div className="amenity" key={i}><Ico size={18}/> {label}</div>
              ))}
            </div>
            <div className="house-foot">
              <div className="price">
                <div className="num">₴ {h.price}</div>
                <div className="per">за добу · сніданок включено</div>
              </div>
              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                <a href="#contacts" className="btn-solid">Забронювати</a>
                <a href="#contacts" className="link-arrow" style={{alignSelf:"center"}}>Дізнатись більше <IArrowRight size={14}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, Houses, useReveal });
