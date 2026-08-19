import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Development from './Pages/Development'
import Cybersecurity from './Pages/Cybersecurity'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200 text-base-content">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/development" element={<Development />} />
        <Route path="/projects/cybersecurity" element={<Cybersecurity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
