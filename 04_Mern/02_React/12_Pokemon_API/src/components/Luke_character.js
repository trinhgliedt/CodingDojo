import React, { useState} from "react";

const DisplayCharacter = (props) => {
    if (props.content.searchResult == null){
        return ( 
            <div></div>
            
        );
    }
    else {

        return (
            <div style={{textAlign: "left", marginLeft: "30%", marginTop: "30px"}}>
                <h2>{props.content.searchResult.name}</h2>
                <p><span style={{fontWeight:"bold"}}>Birth Year: </span>{props.content.searchResult.birth_year}</p>
                <p><span style={{fontWeight:"bold"}}>Height: </span>{props.content.searchResult.height}</p>
                <p><span style={{fontWeight:"bold"}}>Mass: </span>{props.content.searchResult.mass}</p>
                <p><span style={{fontWeight:"bold"}}>Eye Color: </span>{props.content.searchResult.eye_color}</p>
                
            </div>
        );
    }
   


};
export default DisplayCharacter;