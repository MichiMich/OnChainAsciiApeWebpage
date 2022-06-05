import { useMoralisQuery, useMoralisSubscription } from "react-moralis";
import { useEffect, useState } from "react";
import { Button } from "web3uikit"
//todo: need to add donation function

var globalFetch;
/*
export async function GetTop3Donators() {

  const basicQuery = await globalFetch({
    onError: () => (alert("error fetching data")),
    onSuccess: () => (console.log("success"))

  })
  console.log("basicQuery", basicQuery);
  const top3DonatorsFormatted = getTop3DonatorsFormatted(basicQuery);

  console.log("donators formatted", top3DonatorsFormatted);
  console.log("first address", top3DonatorsFormatted[0].address);

  return (top3DonatorsFormatted);

}
*/


export function ShowDonators() {
    var top3DonatorsFormatted;

    const [gettop3Donators, setTop3Donators] = useState(
        <>
            <ul>
                <li>loading</li>
            </ul>
        </>
    );

    useEffect(() => {
        htmlOutput(gettop3Donators);
        console.log("use effect top3donators ran")
    })[gettop3Donators] //only fire, if top3Donators changes


    function htmlOutput(gettop3Donators) {
        if (gettop3Donators === undefined) {
            return (
                <>
                    <ul>
                        <li>loading</li>
                    </ul>
                </>)
        }
        else {
            <>
                <ul>
                    <li>{top3DonatorsFormatted}</li>
                </ul>
            </>
        }
    }

    async function getCurrentTop3Donators() {

        const basicQuery = await globalFetch({
            onError: () => (alert("error fetching data")),
            onSuccess: () => (console.log("success"))

        })
        console.log("basicQuery", basicQuery);
        const top3DonatorsFormatted = getTop3DonatorsFormatted(basicQuery);

        console.log("donators formatted", top3DonatorsFormatted);
        console.log("first address", top3DonatorsFormatted[0].address);


        setTop3Donators(top3DonatorsFormatted);
    }

    return (
        <>
            <div>
                <Button
                    id="try fetch"
                    onClick={() => getCurrentTop3Donators()}
                    text="change element"
                    theme="outline"
                    type="button"
                />
            </div>
            <div>
                {htmlOutput(gettop3Donators)}
            </div>
        </>
    )

}

/*
export function ShowDonators() {
  const [top3Donators, setTop3Donators] = useState(
    <>
      <ul>
        <li>loading</li>
      </ul>
    </>);
    useEffect(() => {

    })

  if (globalCurrentTop3Donators === undefined) {
    return (<div style={{ color: "black" }}>Loading...</div>);
  }
  else {
    return (
      <>
        {top3Donators}
      </>
    )
  }
}
*/


function getTop3DonatorsFormatted(queryResult) {
    console.log("top3donators: ", queryResult[0]);
    console.log("top3donators: ", queryResult[0].id);
    const newTop3Donators = queryResult[0].get("newTop3Donators");
    //find the one with the last obj
    console.log("length", queryResult.length)
    //const newestTransaction = queryResult[last].get("newestTransaction");
    console.log("newTop3Donators: ", newTop3Donators);
    console.log("first: ", newTop3Donators[0]);
    let Donators = [];
    for (let i = 0; i < newTop3Donators.length; i++) {
        Donators.push({ address: newTop3Donators[i][0], amount: newTop3Donators[i][1] * 1e-18 });
    }

    return (Donators);

}



export function MoralisWeb3Query() {

    const { data, fetch, onError, afterSave } = useMoralisQuery(
        "DonatorsUpdate",
        (query) => query.limit(2).descending("transaction_index"), //descending on transactions makes it ordered and we get last transaction on object[0] which is highest donator
        {
            live: true,
        },
    );
    //this hook fires if a new event is triggered
    useMoralisSubscription("DonatorsUpdate", q => q, [], {
        //onCreate: data => alert(`${data} was just created`),
        onUpdate: data => {
            console.log("updated", data);
            //GetTop3Donators(); //update data on website
        }
    });

    console.log("fetched", fetch);
    globalFetch = fetch;
    console.log("data", data);

}



// Moralis.Cloud.afterSave("EthTransactions", async function (request) {
//   const confirmed = request.object.get("confirmed");
//   if (confirmed) {
//     console.log("confirmed")
//     // do something
//   } else {
//     console.log("not confirmed")
//     // handle unconfirmed case
//   }
// });

/* example from https://moralis.io/how-to-interact-with-smart-contracts-through-your-website/
async function donate() {
    let options = {
      contractAddress: "0x356d2E7a0d592bAd95E86d19479c37cfdBb68Ab9",
      functionName: "newDonation",
      abi: [
        {
          inputs: [
            { internalType: "string", name: "note", type: "string" },
          ],
          name: "newDonation",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      Params: {
        Note: "Thanks for your work",
      },
      msgValue: Moralis.Units.ETH(0.1),
    };
    await Moralis.User.logOut();
    console.log("logged out");
  }
  */