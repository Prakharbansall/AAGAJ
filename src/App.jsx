import {useState} from "react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Products from "./pages/Products"
import Team from "./pages/Team"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

export const PAGES={
  HOME:"home",
  ABOUT:"about",
  SERVICES:"services",
  PRODUCTS:"products",
  TEAM:"team",
  BLOG:"blog",
  CONTACT:"contact"
}

function App(){

  const [page,setPage]=useState(PAGES.HOME)

  const renderPage=()=>{
    switch(page){
      case PAGES.ABOUT:
        return <About setPage={setPage}/>
      case PAGES.SERVICES:
        return <Services setPage={setPage}/>
      case PAGES.PRODUCTS:
        return <Products setPage={setPage}/>
      case PAGES.TEAM:
        return <Team setPage={setPage}/>
      case PAGES.BLOG:
        return <Blog setPage={setPage}/>
      case PAGES.CONTACT:
        return <Contact setPage={setPage}/>
      default:
        return <Home setPage={setPage}/>
    }
  }

  return(
    <div className="min-h-screen flex flex-col">
      <Navbar page={page} setPage={setPage}/>
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer page={page} setPage={setPage}/>
    </div>
  )
}

export default App