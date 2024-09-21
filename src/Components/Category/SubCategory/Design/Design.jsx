import React from 'react'
import '../../Category.css'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
export default function Design() {
  return (<div>


    <div className='design'>
      <div className="col-md-10">
        <NavLink to={''}>Ux Design</NavLink>
        <NavLink to={'webDesign'}>Web Design</NavLink>
        <NavLink to={'GraphicDesign'}> Graphic Design </NavLink>
        <NavLink to={'UiDesign'}> Ui Design</NavLink>
        <NavLink to={'Animation'}> 3D & Animation </NavLink>
        <NavLink to={'GameDesign'}> Game Design</NavLink>
        <NavLink to={'FashionDesign'}> Fashion Design</NavLink>
      </div>
      </div>
      <div className="col-md-12">
      <p>User Experience Design Courses</p>
        <Outlet></Outlet>
      </div>
  </div>
    
  )
}
