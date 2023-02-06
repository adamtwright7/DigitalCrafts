import React from 'react'
import "./Footer.css"

// import react rules and the footer css, which should be in the same file

export const Footer = (props) => {
  return (
    <div className='footer'>
      <h2>Footer</h2>
      <p>The current student is {props.studentName}.</p>
      <p>This is a footer component.</p>
      <p> btw, you clicked {props.count} times</p>
    </div>
  )
}
