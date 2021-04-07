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


function GetallQue(){
    // const que=[{"Que":[{"name":"Problem 1","contestid":1508,"type":"B","done":0},{"name":"Problem 2","contestid":1501,"type":"A","done":0},{"name":"Problem 3","contestid":1506,"type":"A","done":0},{"name":"Problem 4","contestid":1505,"type":"A","done":0},{"name":"Problem 5","contestid":1499,"type":"C","done":0}]},{"_id":"606cb7b7181278372d520a10","Que":[{"name":"Problem 1","contestid":1508,"type":"B","done":0},{"name":"Problem 2","contestid":1501,"type":"A","done":0},{"name":"Problem 3","contestid":1506,"type":"A","done":0},{"name":"Problem 4","contestid":1505,"type":"A","done":0},{"name":"Problem 5","contestid":1499,"type":"C","done":0}]}]
    return ([[ {
        name: "Pblasdem 1",
        contestid:1501 ,
        type: "B",
        done: 0
      },
      {
        name: "Pro 2",
        contestid:1501 ,
        type: "A",
        done: 0
      },
      {name: "Problem 3",
        contestid:1506 ,
        type: "A",
        done: 0
      },
      {name: "Problem 4",
        contestid:1505 ,
        type: "A",
        done: 0
      },
      {
        name: "Problem 5",
        contestid:1499 ,
        type: "C",
        done: 0
      }
      ],[ {
        name: "New 1",
        contestid:1503 ,
        type: "F",
        done: 0
      },
      {
        name: "Pro 2",
        contestid:1501 ,
        type: "A",
        done: 0
      },
      {name: "Problem 3",
        contestid:1506 ,
        type: "A",
        done: 0
      },
      {name: "Problem 4",
        contestid:1505 ,
        type: "A",
        done: 0 }, {
        name: "Problem 5",
        contestid:1499 ,
        type: "C",
        done: 0
      }
      ]]);
}

export default GetallQue;