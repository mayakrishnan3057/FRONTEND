import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import Intro from './components/Intro'
import { SiteChrome } from './components/SiteChrome'
import Home from './pages/Home'
import About from './pages/About'
import MyDay from './pages/MyDay'
import Gallery from './pages/Gallery'
import Crackers from './pages/Crackers'

function ScrollManager() {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [location.pathname])
  return null
}

export default function App() {
  const [introDone, setIntroDone] = useState(() => sessionStorage.getItem('diwali-intro-complete') === 'true')
  const [soundOn, setSoundOn] = useState(true)
  const completeIntro = useCallback(() => { sessionStorage.setItem('diwali-intro-complete', 'true'); setIntroDone(true) }, [])
  const replayIntro = useCallback(() => { sessionStorage.removeItem('diwali-intro-complete'); setIntroDone(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }, [])
  return <BrowserRouter>
    <ScrollManager />
    {!introDone && <Intro onComplete={completeIntro} soundOn={soundOn} setSoundOn={setSoundOn} />}
    <SiteChrome soundOn={soundOn} setSoundOn={setSoundOn} onReplayIntro={replayIntro}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-day" element={<MyDay />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/crackers" element={<Crackers />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteChrome>
  </BrowserRouter>
}
