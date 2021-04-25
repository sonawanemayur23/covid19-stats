import React from 'react'
import { slide as Menu } from 'react-burger-menu'
export default function Sidebar() {
    return (
        <div id="outer-container"> 
   <Menu pageWrapId={ "page-wrap" } width={ '20%' } id={ "sidebar" } className={ "my-menu" } >
        <a id="home" className="menu-item" href="/" >Home</a>
        <a id="about" className="menu-item" href="/about" >About</a>
        <a id="contact" className="menu-item" href="/resources" >Resources</a>
        
      </Menu>
     
      </div>
    )
}
