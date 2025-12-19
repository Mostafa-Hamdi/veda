import Header from "./components/Header";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import { useEffect } from "react";

export default function VedaLeadLanding() {
  useEffect(() => {
    // منع التكرار
    if (window.fbq) return;

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      t.id = "meta-pixel";
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js",
    );

    window.fbq("init", "2632987243736525");
    window.fbq("track", "PageView");

    // cleanup
    return () => {
      const script = document.getElementById("meta-pixel");
      if (script) script.remove();
      delete window.fbq;
      delete window._fbq;
    };
  }, []);

  return (
    <div className="bg-[#ebe8d8] text-[#1c3f3a]">
      <Header />
      <Herosection />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
