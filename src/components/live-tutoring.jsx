import React from "react"

export const LiveTutoring = () => {
  return (
    <div 
      style={{
        width: "80%",
        height: "10rem",
        backgroundColor: "#7373DD",
        display: "inline-block",
        marginTop: "5rem",
        marginBottom: "7.5rem",
        paddingTop: "1rem",
        paddingBottom: "3rem",
        background: "linear-gradient(#451ab4, #9067f6)",
      }}>
        <p style={{
          // color: "#e5e5e5",
          color: "white",
          fontSize: "1.8rem",
          marginBottom: 0,
          marginTop: "1rem",
        }}>Looking for more help?</p>
        <p 
          style={{
            color: "white",
            paddingLeft: "5rem",
            paddingRight: "5rem",
            fontFamily: "Noto Sans",
            fontSize: "0.9rem",
          }}>We offer live tutoring sessions with English teachers at your convenience. To learn more and book a session with one of our teachers, click below.</p>
        <button 
          style={{
            color: "white",
            border:" 2px solid white",
            backgroundColor: "transparent",
            borderRadius: "3px",
            fontSize: "1.3rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.6rem",
            marginTop: "1rem",
            marginBottom: "1.2rem",
          }}
          onClick={() => window.open("", "_blank")}
          >Live Tutoring</button>

    </div>
  )
}