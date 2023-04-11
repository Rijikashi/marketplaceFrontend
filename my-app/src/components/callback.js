import {useEffect, useState, React} from 'react'
import App from '../App.js'
import {useNavigate} from "react-router-dom"


const Callback = ( {idToken, setIdToken}) => {
  const navigate = useNavigate()
  const [tempToken,setTempToken] = useState("")

  useEffect( () => {
    let callbackCode = "", callbackURL = new URL(window.location.href), id_token = "",res;
    let apiURL = process.env.REACT_APP_API_URL
    console.log(apiURL);
    const scrapeURL = () => {
      callbackCode = callbackURL.searchParams.get('code');
    }
    const OIDCcall = async() => {
      const redirectUri = encodeURIComponent(`${window.location.origin}/oauth/callback`);
      const data = "code="+callbackCode+"&client_id="+process.env.REACT_APP_GOOGLE_CLIENT_ID
      +"&client_secret=" +process.env.REACT_APP_GOOGLE_SECRET_ID +"&redirect_uri=" + redirectUri
      +"&grant_type=authorization_code";

      fetch("https://oauth2.googleapis.com/token", {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: data
      })
      .then((response) => response.json())
      .then((json) => {
        id_token = json.id_token
        console.log(json.id_token);
        console.log(json.access_token);
        console.log(json);
        fetch(apiURL + "login" + "?id_token=" + json.id_token + "&access_token=" + json.access_token, {
          method: 'POST',
          headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
        })
        .then((response) => response.json())
        .then((json_two) => {
          const parsedData = JSON.parse(json_two)
          navigate("/", {state: {username: parsedData.username, admin: parsedData.admin, id_token:id_token}})
        })
      });
    }
    scrapeURL();
    OIDCcall();
  }, [])

  return (
    <h1>Hello from callback</h1>
  );
}

export default Callback
