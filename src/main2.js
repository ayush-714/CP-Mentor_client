import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import Axios from "axios";
import Quelist from "./quelist"
import './style.css';
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
function RecentContest(props) {
  // const res = await fetch(`https://codeforces.com/api/{methodName}`)
  return (
    <div>
      {props.user}
    </div>);

}

function Quelistbox(props){
  console.log("running");
  // console.log(props)
  if(props.que.done===1)
  return (
      <div className="box1">
    
  

       
       
      </div>
  )
  else{
      return (
          <div className="box2">
              
       
      
       
      
          </div>
      )
  }
}


function Home(props) {
  // const [reqque,setReqquee]= useState(props.quelist);
  // console.log("this"reqque);
  
  if (props.curr === 'NA') {
    // <RecentContest user={props.id} />
    return (
      <div>
       Login To Continue...

      </div>
    );
  }
  else {

    // console.log(props.quelist);
    // await sleep(600);
    var reqque=props.quelist;
    // setReqque(props.quelist);
    // console.log(reqque);
    const url1="https://codeforces.com/problemset/problem/"+reqque[0].contestid+"/"+reqque[0].type;
    const url2="https://codeforces.com/problemset/problem/"+reqque[0].contestid+"/"+reqque[0].type;
    const url3="https://codeforces.com/problemset/problem/"+reqque[0].contestid+"/"+reqque[0].type;
    const url4="https://codeforces.com/problemset/problem/"+reqque[0].contestid+"/"+reqque[0].type;
    const url5="https://codeforces.com/problemset/problem/"+reqque[0].contestid+"/"+reqque[0].type;
    const fun =  async() => {
        for(var i=0;i<reqque.length;i++){

          return(
            <Quelist que={reqque[i]}/>
          );
        }
    }
    var num=100000000;
    const sleep = async() => {
      setTimeout(() => {
        console.log("Sleeping");

      },2000)
    }
    return(
      <div className="mainpage">
       <div className="Userinfo">
         <center>
       <img className="image" src={props.imageurl} />
       <br />
        <h1>{props.username}</h1>
         
         <h4>Ratting : {props.ratting}</h4>
         </center>
         </div>
         <div className="Quelist">
           {/* {sleep} */}
           <center>
             <h1>To-Do</h1>
             </center>  
            <center>
               <div className="Quelist1">
               <center>
             <div>
         {reqque.map(post =>(
                <Quelist que={post} />
                ))  }
                </div>
                </center>
                <div className="check">
                {reqque.map(post =>(
                <Quelistbox que={post} />
                ))  }
                  </div>
                  </div>
                  </center> 
             
         </div>
       
        
      </div>
    )
 
  }

}
function Home2(props) {
 return (
  
   <Home quelist={props.quelist} curr={props.currentuser} username={props.username} imageurl={props.imageurl} ratting={props.ratting}/> )
}

export default Home2;