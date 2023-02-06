import React from "react"
import "./Header.css"

export const Header = (props) => {
    return (
        <div className="headerBody">
            <h2> Header </h2>
            <p> The current instructor is {props.instructor}. </p>
            <p> This is a header component. </p>
        </div>
    )
}
