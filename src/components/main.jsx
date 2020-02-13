import React from "react"

export const Main = () => {
  return (
    <div 
      style={{
        backgroundColor: "#6f00ff", 
        height: "25rem", 
        top: 0, 
        position: "absolute", 
        width: "100%", 
        zIndex: -1
      }}>
      <p style={{color:"white", fontSize: "2rem", fontWeight: "bold"}}>Premium Tests</p>
      <p style={{paddingLeft: "7rem", paddingRight: "7rem", color:"white",}}>These premium speaking tests will help you to prepare for the speaking portion of the IELTS examination. </p>
    </div>
  )
}