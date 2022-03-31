import Account from "./components/Account";
import MintPage from "./components/MintPage";
import Moralis from 'moralis';

function App() {


  //start moralis
  const moralisServerUrl = "https://6i3kla2yuaqw.usemoralis.com:2053/server";

  const moralisAppId = "2fxeRL7M5IdL5ipUi5xTr7KsnZV9J9HjgjToIt7p";

  Moralis.start({ serverUrl: moralisServerUrl, appId: moralisAppId });

  return (
    <>
      <Account />
      <MintPage />
    </>
  );
}

export default App;
