import { gsap } from "gsap";
import scrollTrigger from "gsap/scrollTrigger";
import splitText from "gsap/SplitText";
import Navbar from "./components/Navbar";

gsap.registerPlugin(scrollTrigger, splitText);

const App = () => {
  return (
    <main>
        <Navbar />
    </main>
  )
}

export default App




