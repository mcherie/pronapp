import React from "react"

export const TestCard = (props) => {
  return (
    <div 
      style={{
        backgroundColor: "white",
        height: "10rem",
        width: "22rem",
        display: "inline-block",
        margin: "1rem",
        position: "relative",
        zIndex: 100,
        verticalAlign: "top", 
        paddingTop: "0.5rem",
        paddingBottom: "6rem",
        paddingLeft: "2rem",
        paddingRight: "2.5rem",
        textAlign: "left",
        // fontFamily: "Open Sans",
        fontFamily: "Open Sans,Arial,sans-serif"
        // boxShadow: "0 30px 10px 0.1px #ededed",
      }}> 

      <img 
        src={props.img ? props.img : "◉"} 
        alt="" 
        class="et-waypoint et_pb_animation_top et-animated"
        style={{
          height: "2rem",
          paddingTop: "1rem",
          verticalAlign: "top", 
        }}></img>
        <p 
          style={{
            color: "#33dba4",
            fontFamily: "Open Sans",
            fontWeight: "bold",
            fontSize: "1.1rem",
            display: "inline-block",
            paddingLeft: "1rem",
          }}>{props.title ? props.title : "Title 1"}</p>
        <p 
            style={{
              fontFamily: "Noto Sans",
              paddingLeft: "3rem", 
              color: "#8585bd",
              lineHeight: "1.5em",
            }}>{props.desc ? props.desc : "Description"}</p>
        <p 
          style={{
            paddingLeft: "3rem", 
            fontWeight: "bold",
            color: "#8585bd",
          }}>START NOW</p>
    </div>
  )
}