import React from "react"

export const TestCard = (props) => {
  return (
    <div 
      style={{
        backgroundColor: "white",
        height: "10rem",
        width: "24rem",
        display: "inline-block",
        margin: "1.5rem",
        position: "relative",
        zIndex: 100,
        verticalAlign: "top", 
        paddingTop: "0.5rem",
        paddingBottom: "6.5rem",
        paddingLeft: "2rem",
        paddingRight: "2.5rem",
        textAlign: "left",
        fontFamily: "Open Sans,Arial,sans-serif"
      }}> 

      <img 
        src={props.img ? props.img : "◉"} 
        alt="" 
        style={{
          height: "2rem",
          paddingTop: "1rem",
          verticalAlign: "top", 
        }}></img>
      <a 
          href="blank" 
          target="_blank" 
          rel="noopener noreferrer"><p 
          style={{
            color: "#09e1c0",
            fontFamily: "Open Sans",
            fontWeight: "bold",
            fontSize: "1.1rem",
            display: "inline-block",
            paddingLeft: "1rem",
          }}>{props.title ? props.title : "Title 1"}</p></a>
      <p 
            style={{
              fontFamily: "Noto Sans",
              paddingLeft: "3rem", 
              color: "#8585bd",
              lineHeight: "1.9em",
              marginTop: 0,
            }}>{props.desc ? props.desc : "Description"}</p>
      <p 
          style={{
            paddingLeft: "3rem", 
            fontWeight: "bold",
            color: "#8585bd",
            paddingTop: "0.8rem",
          }}>START NOW</p>
    </div>
  )
}