import React from "react"
import { TestCard } from "./test-card"

export const Tests = () => {
  return (
    <div 
      style={{ 
        marginTop: "24rem", 
        justifyContent: "flex-start",
        alignContent: "center",
        // paddingLeft: "5rem",
        // paddingRight: "5rem",
        // position: "fixed",
        backgroundColor: "transparent",
        width: "100%",
        zIndex: -2,
      }}>
      <TestCard 
        title="Premium Test 1"
        desc="Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus."/>
      <TestCard 
        title="Premium Test 2"
        desc="Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus."/>
      <TestCard 
        title="Premium Test 3"
        desc="Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus."/>
      <TestCard 
        title="Premium Test 4"
        desc="Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus."/>

    </div>
  )
}