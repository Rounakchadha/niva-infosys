import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import Projects from './pages/Projects'
import Partners from './pages/Partners'
import Contact from './pages/Contact'

import { ThemeProvider } from './components/ThemeProvider'

export default function App() {
 return (
 <ThemeProvider>
 <BrowserRouter>
 <Routes>
 <Route element={<Layout />}>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/services" element={<ServicesPage />} />
 <Route path="/projects" element={<Projects />} />
 <Route path="/partners" element={<Partners />} />
 <Route path="/contact" element={<Contact />} />
 </Route>
 </Routes>
 </BrowserRouter>
 </ThemeProvider>
 )
}
