
import Account from "./components/v2/Account";
import Moralis from 'moralis';
import { RaffleDesktop } from './components/v2/Raffle_desktop.js';
import { RaffleMobile } from './components/v2/Raffle_mobile.js';
import { Navigation } from "./components/Navigation.js";
// import Navigation from "./components/Navigation.js"

function App() {


  //start moralis
  const moralisServerUrl = "https://zndbxd11t68t.usemoralis.com:2053/server";

  const moralisAppId = "DgACAFNJyee1lMogJi7roF9jAFUMgfCfqOYlm43j";

  Moralis.start({ serverUrl: moralisServerUrl, appId: moralisAppId });
  console.log("window width", window.innerWidth);

  return (
    <>
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> */}
      <Navigation />
      {/* <div class="wrapper" style={{ height: "1000px" }}>
        <div class="dashed-box" style={{ position: "relative" }}>Dashed box</div>
        <div class="gold-box" style={{ position: "absolute", background: "gold" }}>Gold box</div>
        <div class="green-box" style={{ position: "absolute", background: "lightgreen" }}>Green box</div>
      </div> */}
    </>
  )
  /*
    if (window.innerWidth <= 768) {
      console.log("display mode mobile");
      return (
        <>
          <Account />
          <RaffleMobile />
        </>
      )
    }
    else {
      console.log("display mode desktop");
      return (
        <>
          <Navigation />
          <Account />
          <RaffleDesktop />
        </>
      )
    }*/
}


export default App;
