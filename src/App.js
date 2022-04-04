import Account from "./components/Account";
import Moralis from 'moralis';
import { InteractWithContract } from "./components/InteractWithContract.js";
import { MoralisProvider } from "react-moralis";
function App() {


  //start moralis
  const moralisServerUrl = "https://l9j8ruqibthp.usemoralis.com:2053/server";

  const moralisAppId = "clgceh8S5tCXxJjT8V26VBZxQpE7vGbXe9iHRDuI";

  Moralis.start({ serverUrl: moralisServerUrl, appId: moralisAppId });

  return (
    <>

      <Account />
      {/* <MintPage /> */}
      <InteractWithContract />
    </>
  );
}

export default App;
