import React from 'react'
import '../../Category.css'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
export default function Development() {
  return (<div>


    <div className='design'>
      <div className="col-md-10">
        <NavLink to={''}>Front-end</NavLink>
        <NavLink to={'webDesign'}>Game Design</NavLink>
        <NavLink to={'GraphicDesign'}> Back-end </NavLink>
        <NavLink to={'UiDesign'}> Ui Design</NavLink>
        <NavLink to={'Animation'}> Modile App </NavLink>
        <NavLink to={'Animation'}> Flutter </NavLink>
      </div>
      </div>
      <div className="col-md-12">
      <p>User Experience Design Courses</p>
        <Outlet></Outlet>
      </div>
  </div>
    
  )
}
