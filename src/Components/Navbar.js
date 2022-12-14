import React from 'react'
import { Link } from 'react-router-dom'
import './Assets/Images/CSS/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar' id='navbar' style={{display : "flex", justifyContent: "center", width: "100%"}}>
      <div className="nav-svg" style={{display: "flex", justifyContent: "center", width: "100%" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.76 27.94" width="40%">
        <defs>
        </defs>
        <g class="a">
          <path class="b" d="M21.12,106.08s4.48.64,9.36,8.16c0,0,10.74,19.68,22.08,19.68H186.24s8.83,2.19,20.16-14.16c0,0,6.56-11.2,12.48-13.68Z" transform="translate(-21.12 -106.08)"/>
        </g>
      </svg>
      </div>
      <div className="mainNav">
        <Link to="/legacy"><div className="nav-con"><h4>Legacy</h4></div></Link>
        <Link to="/team"><div className="nav-con"><h4>Team</h4></div></Link>
        <Link to="/"><div className="nav-con" style={{display: "flex", justifyContent: "center"}}><img src={require('./Assets/Images/aswd.png')} alt=""  style={{width:"100%"}} /></div></Link>
        <Link to="/event"><div className="nav-con"><h4>Schedule</h4></div></Link>
        <Link to="/event/name"><div className="nav-con"><h4>Event</h4></div></Link>
      </div>
    </div>
  )
}

export default Navbar