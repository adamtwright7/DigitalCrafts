import React from 'react'

export const Student = ({student}) => {
  return (
    <div>
        <p> {student.firstName} </p>
        <p> {student.occupation} </p>
    </div>
  )
}
