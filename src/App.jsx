import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

    useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      
    </>
  )
}

export default App
