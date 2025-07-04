import { gsap } from "gsap";
import scrollTrigger from "gsap/scrollTrigger";
import splitText from "gsap/SplitText";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(scrollTrigger, splitText);

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero/>
        <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App




