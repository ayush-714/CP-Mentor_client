import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import Home from './main';
import Home2 from './main2';
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Axios from "axios";
import { Alert } from 'react-alert'
import DelayLink from 'react-delay-link';
import GetallQue from './AllQue'
import { css } from "@emotion/react";
import { SpinnerCircular ,SpinnerCircularSplit,SpinnerDiamond,SpinnerCircularFixed} from 'spinners-react';
import ClipLoader from "react-spinners/ClipLoader";
import './style.css';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function App() {

  const linkof="https://secret-retreat-82606.herokuapp.com/"
  var currentRankkk = 1;
  var [currentRank, setCurrentrank] = useState(1);
  let [color, setColor] = useState("#ffffff");
  var [currentayu, setCurrentayu] = useState([{
    name: "Pblasdem 1",
    contestid: 1501,
    type: "B",
    done: 0
  },
  {
    name: "Pro 2",
    contestid: 1501,
    type: "A",
    done: 0
  },
  {
    name: "Problem 3",
    contestid: 1506,
    type: "A",
    done: 0
  },
  {
    name: "Problem 4",
    contestid: 1505,
    type: "A",
    done: 0
  },
  {
    name: "Problem 5",
    contestid: 1499,
    type: "C",
    done: 0
  }
  ]);
  var temp=[];
 const [loading,setLoading]=useState(false);
  const [totalQue, setTotalque] = useState(0);
  const [currentlevel, setCurrentlevel] = useState(-1);
  const [currentuser, setCurrentuser] = useState("NA");
  const [codeimage, setCodeimage] = useState("NA");
  const [codename, setCodename] = useState("ayu.7");
  const [coderatting, setCoderatting] = useState("NA");
  // const [quealllist,setquealllist] = useState([];)
  var users_list = [];
  const [currentid, setCurrentID] = useState("NA");
  const [codeforcesid, setCodeforcesid] = useState("");
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState("");
  var quealllist=[];
  const urlq="https://secret-retreat-82606.herokuapp.com/getall";



  setTimeout(async function(){
    await Axios.get("https://powerful-citadel-42239.herokuapp.com/getall").then((response) => {
        var temp=response.data;
        for(var i=0;i<temp.length;i++){
          quealllist.push(temp[i].Que);
        }
    });
    // console.log("This",quealllist);
  },1);
  




  const update = () => {
    Axios.get("https://powerful-citadel-42239.herokuapp.com/update").then((response) => {
      // setUserList(response);
      for (let i = 0; i < response.data.length; i++) {
        users_list.push(response.data[i]);
      }
      // users_list = response.data;
      // console.log(response.data.length);
    });
    // console.log(users_list);
  }
  const addUser = () => {

    Axios.post("https://powerful-citadel-42239.herokuapp.com/add", {
      user: username,
      cfid: codeforcesid,
      pass: password
    }).then(() => {

    });

  }
  const [finalque, setFinalque] = ([]);
  var reqque = [{
    name: "Pblasdem 1",
    contestid: 1501,
    type: "B",
    done: 0
  },
  {
    name: "Pro 2",
    contestid: 1501,
    type: "A",
    done: 0
  },
  {
    name: "Problem 3",
    contestid: 1506,
    type: "A",
    done: 0
  },
  {
    name: "Problem 4",
    contestid: 1505,
    type: "A",
    done: 0
  },
  {
    name: "Problem 5",
    contestid: 1499,
    type: "C",
    done: 0
  }
  ];
  
 
  // var quealllist =temp;
  // console.log(quealllist);
  // useEffect(() => {
  //   console.log(currentid);
  // });
  const verifyUser = () => {
    // Updateque();
    // let [color, setColor] = useState("#ffffff");
    setLoading(true);
    var found = 0;
    // reqque=
    setTimeout(
      function () {
        Axios.get("https://powerful-citadel-42239.herokuapp.com/update").then((response) => {
          // setUserList(response);
          for (let i = 0; i < response.data.length; i++) {
            users_list.push(response.data[i]);
          }
          // users_list = response.data;
          // console.log(response.data.length);


          for (let i = 0; i < users_list.length; i++) {


            if (users_list[i]._id === username && password === users_list[i].Password) {
              found = 1;
              setCurrentID(users_list[i].Code_Forces);
              setCurrentlevel(users_list[i].Level);
              // setTimeout(
              //     async function() {

              // }, 1);
              // setTimeout(function() {
              // console.log(currentid)
              setTimeout(
                async function () {
                  const response1 = await Axios.post("https://powerful-citadel-42239.herokuapp.com/userdetails", {
                    id: users_list[i].Code_Forces
                  })
                  var temp = response1;
                  // response1=response1.json();
                  // JSON.stringify(response1);
                  setCodename(temp.data.Name);
                  setCodeimage(temp.data.Imageurl);
                  setCoderatting(temp.data.Ratting);

                  // console.log(temp.data);
                }, 15);
                
              // },5000)
            }
          }
        });
      }, 3000);
   
     
    setTimeout(function () {
      setLoading(false);
      if (found === 1) {
      
        alert('Login Successful');
        setCurrentuser(username);
        


      }
      else {
        alert('Wrong username or password!!');
      }
    }, 9000);



  }
  const updateque = async () => {

    Updateque();


  }



  async function Updateque() {
    if(currentuser!="NA"){
    var userquestions = [];
    const user = currentid;
    const userid = currentuser;

    const response = await Axios.post("https://powerful-citadel-42239.herokuapp.com/userquestions", {
      id: currentid
    })
    // .then((response) => {



    // });
    const frust = 0;
    // setTimeout( function(){
    for (let i = 0; i < response.data.result.length; i++) {
      if (response.data.result[i].verdict === "OK") {
        userquestions.push({
          QueId: response.data.result[i].id, Name: response.data.result[i].problem.name,
          ContestId: response.data.result[i].problem.contestId, contesttype: response.data.result[i].problem.index
        });
      }
    } var gotit = 0;
   
    for (; currentRankkk <= 2; currentRankkk++) {
      for (var i = 0; i < quealllist.length; i++) {

        for (var j = 0; j < userquestions.length; j++) {

          if (quealllist[currentRankkk - 1][i].contestid === userquestions[j].ContestId
            && quealllist[currentRankkk - 1][i].type === userquestions[j].contesttype) {
            quealllist[currentRankkk - 1][i].done = 1;

            // setTotalque(totalQue+1);
          }

        }
      }
      reqque = quealllist[currentRankkk - 1];
      for (var i = 0; i < quealllist.length; i++) {
        if (quealllist[currentRankkk - 1][i].done === 0) {
          gotit=1;
          break;
        }
        if(gotit===1)break;
      }
     

      setCurrentrank(currentRankkk);
      setCurrentayu(quealllist[currentRankkk - 1]);
    }
    // if(currentRankkk==3)


    
    // },4000);
}

  }
  
  useEffect(() => {
    // Updateque();
  }, currentRankkk);


  return (

    <div className="form">
      <Router>
        <div className="navbar">
          <Link className="link" to="/home" onClick={updateque}>Home</Link>
          <Link className="link" to="/">Sign Up</Link>
          <Link className="link" to="/login" >Login</Link>
          
          <h3 className="h3">CP-Mentor</h3>
        
        </div>


        <Switch>

          <Route exact path="/">

              <center>
            <div className="boxother">
              <form>

                
                <h2>
                  Register
                </h2>
                <br />
                <lable>CodeForces ID</lable>
                <input type="text"
                  onChange={(event) => {
                    setCodeforcesid(event.target.value);
                  }}></input>
                  <br /><br />
                <lable>Username</lable>
                <input type="text"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}></input>
                      <br /><br />
                <lable>Password</lable>
                <input type="text"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}></input>
                      <br /><br /><br />
                <button onClick={addUser}>Sign Up</button>
              </form>
            </div>
            </center>
          </Route>
          <div>

            <Route exact path="/login">
            <center>
            <div className="boxother1">
             

                
                <h2>
                  Login
                </h2>
                <br />
                
                <lable>Username</lable>
                <input type="text"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}></input>
                      <br /><br />
                <lable>Password</lable>
                <input type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}></input>
                      <br /><br /><br />
                <button onClick={verifyUser}>Login</button>
                <br />
                <br />
                <SpinnerCircularFixed size="9%" enabled={loading} />
            </div>
            </center>
            </Route>
            <Route exact path="/home">
              {/* <h1>Loading...</h1> */}
              <Home quelist={currentayu} curr={currentuser} username={codename} imageurl={codeimage} ratting={coderatting} rank={currentRank} total={totalQue} />
              {/* quealllist[currentRank-1] */}
            </Route>
            {/* <Route exact path="/home2">

              <Home2 quelist={currentayu} curr={currentuser} username={codename} imageurl={codeimage} ratting={coderatting} rank={currentRank} total={totalQue} />

            </Route> */}

          </div>

        </Switch>

      </Router>
    </div>
  )


}
export default App;