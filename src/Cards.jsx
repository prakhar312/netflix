import React from "react"
import "./index.css"

function Card(props){
    return(
      <>
      
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="pic" className="card_img"></img>
          <div className="card_info">
            <span className="card_category">{props.sname}</span>
            <h3 className="card_title">{props.title}</h3>
            <a href={props.link} target="_blank" rel="noreferrer">
            <button>Watch Now</button></a>
          </div>
        </div>
      </div>
      </>
    )
  }

  export default Card;