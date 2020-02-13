import React from "react"
import Facebook from "../images/facebook.png"
import Twitter from "../images/twitter.png"

export const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#2a2a2a",
        width: "100%",
        color: "#7f7f7f",
        textAlign: "left",
        fontFamily: "Open Sans",
        paddingLeft: "10rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        fontSize: "0.9rem",
        display: "flex",
      }}>
      <span >
        Designed by <strong>Cher</strong> &nbsp;&nbsp;|&nbsp;&nbsp; Powered by <strong>chocolate bars</strong> and <strong>hot chocolate</strong>
        <a 
          href="http://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer">
            <img
              src={Facebook}
              alt=""
              style={{
                height: "1.4rem",
                paddingLeft: "25rem",
                color: "#7f7f7f",
                display: "inline-block",
              }}
            ></img></a>
        <a
          href="http://twitter.com"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src={Twitter}
            alt=""
            style={{
              height: "1.1rem",
              paddingLeft: "2rem",
              color: "#7f7f7f",
              display: "inline-block",
            }}
          ></img></a>
      </span>
    </div>
  )
}