import React from "react"

export const TestCard = (props) => {
  return (
    <div 
      style={{
        backgroundColor: "white",
        height: "18rem",
        width: "30rem",
        display: "inline-block",
        margin: "1rem",
        position: "relative",
        zIndex: 100,
        verticalAlign: "top", 
      }}> 
      <p>{props.title ? props.title : "Title 1"}</p>
      <p>{props.desc ? props.desc : "Description"}</p>
    </div>
  )
}