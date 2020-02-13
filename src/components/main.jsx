import React from "react"

export const Main = () => {
  return (
    <div 
      style={{
        backgroundColor: "#7373DD", 
        height: "30rem", 
        top: 0, 
        position: "absolute", 
        width: "100%", 
        // zIndex: -1
        // display: "flex",
        // alignItems: "center",
        // justifyItems: "center",
        // textAlign: "center",
        background: "linear-gradient(#3c0cb6, #9067f6)",
      }}>
      <p 
        style={{
          color:"white", 
          fontSize: "2.7rem", 
          fontWeight: "bold", 
          paddingTop: "5rem",
          fontFamily: "Open Sans",
        }}>Premium Tests</p>
      <p 
        style={{
          paddingLeft: "20rem", 
          paddingRight: "20rem", 
          color:"#cccccc", 
          fontSize: "1rem",          
          fontFamily: "Noto Sans",
        }}>These premium speaking tests will help you to prepare for the speaking portion of the IELTS examination. </p>
    </div>
  )
}