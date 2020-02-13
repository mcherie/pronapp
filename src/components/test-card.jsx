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
        paddingBottom: "5rem",
        paddingLeft: "2rem",
        paddingRight: "2.5rem",
        textAlign: "left",
        fontFamily: "Open Sans",
        // boxShadow: "0 30px 10px 0.1px #ededed",
      }}> 

      <img 
        src="http://www.get-social.ca/wp-content/uploads/2019/12/coding-icon_7.jpg" 
        alt="" 
        class="et-waypoint et_pb_animation_top et-animated"
        style={{
          height: "2rem",
          // display: "inline-block",
          paddingTop: "1rem",
        }}></img>
      <span 
        style={{
          // display: "inline-block",
          justifyContent: "flex-start"
        }}>
        <p 
          style={{
            color: "#33dba4",
            fontFamily: "Open Sans",
            fontWeight: "bold",
            fontSize: "1.1rem",
            display: "inline-block",
            // verticalAlign: "center", 
            paddingLeft: "1rem",
          }}>{props.title ? props.title : "Title 1"}</p>
        <p 
            style={{
              fontFamily: "Noto Sans",
              paddingLeft: "3rem", 
              color: "#999999"
            }}>{props.desc ? props.desc : "Description"}</p>
        <p 
          style={{
            paddingLeft: "3rem", 
            color: "grey", 
            fontWeight: "bold",
          }}>START NOW</p>
      </span>
    </div>
  )
}