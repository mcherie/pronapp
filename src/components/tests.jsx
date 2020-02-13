import React from "react"
import { TestCard } from "./test-card"

export const Tests = () => {
  return (
    <div 
      style={{ 
        marginTop: "20rem", 
        justifyContent: "flex-start",
        alignContent: "center",
        paddingLeft: "5rem",
        paddingRight: "5rem",
        // position: "fixed",
      }}>
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />

    </div>
  )
}