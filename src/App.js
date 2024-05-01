import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import { tg_title_animation } from "./lib/gsap/tg_title_animation";
import { useParticles } from "./lib/hooks/useParticles";
import { useParallax } from "./lib/hooks/useParallax";
import { useHasAnimation } from "./lib/hooks/useHasAnimation";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ContactPage from "./pages/Contact/ContactPage";
import { useWow } from "./lib/hooks/useWow";
import { useAos } from "./lib/hooks/useAos";
import { useJarallax } from "./lib/hooks/useJarallax";

function App() {
  useWow();
  useAos();
  useJarallax();
  useParallax();
  useParticles();
  useHasAnimation();

  // title, subtitle animation
  useEffect(() => {
    tg_title_animation();
  }, []);

  // on route change to top of the page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
