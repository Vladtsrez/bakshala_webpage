function App() {
  useReveal();
  return (
    <>
      <Header/>
      <Hero/>
      <Houses/>
      <About/>
      <Fishing/>
      <ZoomParallax/>
      <Testimonials/>
      <Gallery/>
      <Footer/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
