import React from 'react'
import Course from './../../../../Single-Course/Course';

export default function Graphic() {
  return (
    <div className='row gy-4'>
      <div className="col-md-4">
      <Course></Course>
      </div>
      <div className="col-md-4">
      <Course></Course>
      </div>
      <div className="col-md-4">
      <Course></Course>
      </div>
    </div>
  )
}
