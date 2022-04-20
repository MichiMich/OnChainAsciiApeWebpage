
import Account from "./components/v2/Account";
import Moralis from 'moralis';
import { RaffleDesktop } from './components/v2/Raffle_desktop.js';
import { RaffleMobile } from './components/v2/Raffle_mobile.js';
import Navigation from "./components/Navigation.js"

function App() {


  //start moralis
  const moralisServerUrl = "https://l9j8ruqibthp.usemoralis.com:2053/server";

  const moralisAppId = "clgceh8S5tCXxJjT8V26VBZxQpE7vGbXe9iHRDuI";

  Moralis.start({ serverUrl: moralisServerUrl, appId: moralisAppId });
  console.log("window width", window.innerWidth);

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
  }
}

export default App;
