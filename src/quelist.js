import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'

function Quelist(props){
    console.log("running");
    // console.log(props)
    const url="https://codeforces.com/problemset/problem/"+props.que.contestid+"/"+props.que.type;
    if(props.que.done===1)
    return (
        <div className="conditionone">
      
    
         <a href={url}><h3>{props.que.name}</h3></a>
         
         
        </div>
    )
    else{
        return (
            <div className="conditionone">
                
         
         <a href={url}><h3>{props.que.name}</h3></a>
         
        
            </div>
        )
    }
}

export default Quelist;