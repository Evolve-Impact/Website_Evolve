
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './Layout'
import Landing from './Page/Landing'
import About from './Page/About'
import BrandEssence from './Page/BrandEssence'
import TraceTag from './Page/ProductPages/TraceTag'
import EngagePulse from './Page/ProductPages/EngagePulse'
import Xlync from './Page/ProductPages/Xlync'
import Services from './Page/Services'
import Contact from './Page/Contact'
import ProductDevelopement from './Page/ProductDevelopement'
import CSDDD from './Page/ProductPages/CSDDD'


function App() {

  return (
    <>
    <div>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>  
          <Route index element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/brand-essence" element={<BrandEssence />} />
          <Route path="/trace-tag" element={<TraceTag />} />
          <Route path="/engage-pulse" element={<EngagePulse />} />
          <Route path="/xlync" element={<Xlync />} />
          <Route path="/services" element={<Services />} />          
          <Route path="/contact-us" element={<Contact />} />        
          <Route path="/product-development" element={<ProductDevelopement />} />
          <Route path="/HREDD" element={<CSDDD />} />


        </Route>
      </Routes>
    </BrowserRouter>

    </div>
     
    </>
  )
}

export default App
