
import Moralis from 'moralis';
import { Navigation } from "./components/Navigation.js";

function App() {


  //start moralis
  const moralisServerUrl = "https://nbjjx1zhmswf.usemoralis.com:2053/server";

  const moralisAppId = "Ru12aTCsPRV6DQlsAiHTtbRAVTLxPBurmyrdDPk1";

  Moralis.start({ serverUrl: moralisServerUrl, appId: moralisAppId });
  console.log("window width", window.innerWidth);

  return (
    <>
      <Navigation />
    </>
  )
}


export default App;
