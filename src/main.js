import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import Axios from "axios";
import Quelist from "./quelist"
import './style.css';
import { SpinnerCircular,SpinnerDotted ,SpinnerCircularSplit,SpinnerDiamond,SpinnerCircularFixed} from 'spinners-react';
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
  if(props.que.done)
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
  console.log(props.curr);
  console.log(props.done);
  console.log(reqque);
  if (props.curr === 'NA' ) {
    // <RecentContest user={props.id} />
    return(
      <div>
        <br />
      <br />
      <br />
      <br />
      <br />
      <center>
      <h1>
   Login to continue..
    <br />
      
    {/* <SpinnerCircular size={50} thickness={180} speed={100} color="rgba(0, 0, 0, 1)" secondaryColor="rgba(172, 72, 57, 0.02)" /> */}
    </h1>
    </center>
    </div>
    )
  }
  else {
    
    if( reqque === undefined || !props.done){
      return(
        <div>
          <br />
        <br />
        <br />
        <br />
        <br />
        <center>
        <h1>
      Please Wait
      <br />
      {/* F7FBFC */}
        
      <SpinnerCircular size={50} thickness={180} speed={100} color="rgba(0, 0, 0, 1)" secondaryColor="rgb(247, 251, 252)" />
      </h1>
      </center>
      </div>
      )
    }else{

    const fun =  async() => {
        for(var i=0;i<reqque.length;i++){

          return(
            <Quelist que={reqque[i]}/>
          );
        }
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
}
function Home2(props) {
 return (
   <Home quelist={props.quelist} curr={props.currentuser}/> )
}

export default Home;