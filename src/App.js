import React, { useEffect, useState } from "react";
import "./App.css";
import Login from  "./Login";
import { getAccessToken } from "./authentication";
import SpotifyWebApi from "spotify-web-api-js";
import Test from "./Test"; 


const spotify = new SpotifyWebApi();

function App() {
  const[token, setToken] = useState(null);

  useEffect(() => { 
    if(window.location.hash) {
      const {access_token} = getAccessToken(window.location.hash);
      window.location.hash = '';

      //sanity check that checks to see if access token was retrieved
      if(access_token) {
        setToken(access_token);
        spotify.setAccessToken(access_token);

        spotify.getMe().then((user) => {
          console.log('user', user);
       });
      }

      console.log('I HAVE AN ACCESS TOKEN YAYYY:', access_token);
      }
    }, []);
  return (
    <div className="app">
       {
        token ? (
        <Test />
        ) : (
        <Login />
        )
      }
    </div>
  );
}

export default App;
