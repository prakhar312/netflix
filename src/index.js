import React from "react"
import ReactDOM from "react-dom"
import Card from "./Cards"
import Sdata from "./Sdata"

function ncards(val){
  return(
    <Card 
      key={val.id}
      imgsrc={val.imgscr}
      title={val.title} 
      sname={val.sname}
      link={val.link}/>
  )
}
ReactDOM.render(
  <>
  <h1 className="heading_style">List of Top Netflix Series </h1>
  {Sdata.map(ncards)}
 </>,
  document.getElementById("root")
)