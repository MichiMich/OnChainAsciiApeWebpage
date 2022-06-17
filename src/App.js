
import Moralis from 'moralis';
import { Navigation } from "./components/Navigation.js";
require('dotenv').config()

function App() {

  Moralis.start({ serverUrl: process.env.REACT_APP_MORALIS_SERVER_URL, appId: process.env.REACT_APP_MORALIS_APP_ID });
  console.log("window width", window.innerWidth);

  return (
    <>
      <Navigation />
    </>
  )
}


export default App;
