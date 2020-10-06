import React ,{useEffect,useState} from 'react';
import Login from "./Login"
import { getAccessToken } from "./spotify";
import Player from "./Player"
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from "./DataLayer";

import './App.css';

function App() {

  const spotify=new SpotifyWebApi();

  const [{ user , token },dispatch]=useDataLayerValue();


    useEffect(() => {
        const hash=getAccessToken()
        window.location.hash="";
        const _token=hash.access_token;
        

        if(_token){
            dispatch({
              type:"SET_TOKEN",
              token:_token
            });
        }

        spotify.setAccessToken(_token);

        spotify.getMe().then(user=>{
          dispatch({
            type:"SET_USER",
            user:user
          })
          
        })

        spotify.getUserPlaylists().then((playlists) =>{
            dispatch({
              type:"SET_PLAYLISTS",
              playlists:playlists
            })
        })

        spotify.getPlaylist("37i9dQZEVXcVRA69TTPy07").then(response =>{
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly:response
          })
        })

    }, [])

    console.log(user);
    console.log(token);

  return (
    <div className="app">
      {
        token?<Player  spotify={spotify}/> : <Login/>
      }
    </div>
  );
}

export default App;
