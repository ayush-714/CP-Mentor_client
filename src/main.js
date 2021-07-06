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
  
  var reqquee=props.quelist;
  const [reqque,setReqquee]= useState(props.quelist);
  useEffect(()=>{
    // console.log("yup",reqque)

    setReqquee(reqquee);
  },[props.quelist])
  // console.log("this"reqque);
  
  if (props.curr === 'NA') {
    // <RecentContest user={props.id} />
    return (
      <div>
        <br />
        <br />
        <br />
       
        <h3>
      <p>                                                           Login To Continue...</p>
        </h3>
      </div>
    );
  }
  else {

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
        <br />
        <br />
        <br />
       <div className="Userinfo">
         <center>
       <img className="image" src={props.imageurl} />
       <br />
        <h1>{props.username}</h1>
         
         <h4>Rating : {props.ratting}</h4>
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
         <div className="Ranklist">
          
           <center>
             <br />
                 <h3> Current Level</h3>
                 <h1>{props.rank}</h1>
                 {/* <h3> Completed: {props.total}</h3> */}
            </center>
         </div>
        
      </div>
    )
 
  }

}
function Home2(props) {
 return (
   <Home quelist={props.quelist} curr={props.currentuser}/> )
}

export default Home;