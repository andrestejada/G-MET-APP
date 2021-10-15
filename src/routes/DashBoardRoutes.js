import React from 'react'
import ContenidoPrincipal from '../components/ContenidoPrincipal'
import NavBar from '../components/static/NavBar'
import SideBar from '../components/static/SideBar'

const DashBoardRoutes = () => {
    return (
        <div className='main-container' >
              <SideBar/>
              <main>
                  <NavBar/>
                  <ContenidoPrincipal/>       
              </main>
        </div>
    )
}

export default DashBoardRoutes
