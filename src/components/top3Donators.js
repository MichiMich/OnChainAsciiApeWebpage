import { useMoralisQuery, useMoralisSubscription } from "react-moralis";
import { useEffect, useState } from "react";
import { Table, Avatar, Tag, Button } from "web3uikit"
//todo: need to add donation function

var globalFetch;

export function ShowTop3Donators() {

  const [gettop3Donators, setTop3Donators] = useState(undefined);


  useEffect(() => {
    getCurrentTop3Donators();
  }, []); //run once at page call, will be updated automatically onUpdate

  const { data, fetch, onError, afterSave } = useMoralisQuery(
    "DonatorsUpdate",
    (query) => query.limit(2).descending("block_timestamp"), //descending on transactions makes it ordered and we get last transaction on object[0] which is highest donator
    {
      live: true,
    },
  );
  //this hook fires if a new event is triggered
  useMoralisSubscription("DonatorsUpdate", q => q, [], {
    //onCreate: data => alert(`${data} was just created`),
    onUpdate: data => {
      console.log("updated", data);
      getCurrentTop3Donators(); //update data on website
    }
  });

  console.log("fetched", fetch);
  globalFetch = fetch;
  console.log("data", data);

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
    //reduce address and amount to 3 digits
    for (let i = 0; i < Donators.length; i++) {
      Donators[i].address = Donators[i].address.substring(0, 6) + "..." + Donators[i].address.substring(Donators[i].address.length - 4);
      Donators[i].amount = Donators[i].amount.toFixed(3);
    }

    return (Donators);

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

  if (gettop3Donators === undefined) {
    return (<>
      <center style={{ marginTop: "10%", marginLeft: "2%", marginRight: "2%" }}>
        <div style={{ maxWidth: "800px" }}>
          <Table
            columnsConfig="80px 0.5fr 0.5fr"
            customNoDataText="Donations"
            data={[]}
            header={[
              '',
              <span style={{ marginTop: "20px", color: "242222", fontWeight: "1000" }}>Wallet</span>,
              <span style={{ marginTop: "20px", color: "242222", fontWeight: "1000" }}>Donated [eth]</span>,
            ]}
            isLoading
            maxPages={0}
            onPageNumberChanged={function noRefCheck() { }}
            pageSize={1}
          />
        </div>
      </center >
    </>
    )
  }
  else {
    return (<>

      <center style={{ marginTop: "10%", marginLeft: "2%", marginRight: "2%", zIndex: 10, position: "relative" }}>
        <h1 style={{ color: "white" }}>Top3 Donators</h1>

        <div style={{ textAlign: "center", marginTop: "1%" }}>
          <p>**The top3 donators will be granted with a special Ape**</p>
        </div>
        <div style={{ maxWidth: "800px" }}>
          <Table
            columnsConfig="80px 0.5fr 0.5fr"
            customNoDataText="Donations"
            data={
              [
                [
                  <Avatar isRounded size={36} theme="image" />,
                  gettop3Donators[0].address,
                  <Tag color="blue" text={gettop3Donators[0].amount} />
                ],
                [
                  <Avatar isRounded size={36} theme="image" />,
                  gettop3Donators[1].address,
                  <Tag color="blue" text={gettop3Donators[1].amount} />
                ], [
                  <Avatar isRounded size={36} theme="image" />,
                  gettop3Donators[2].address,
                  <Tag color="blue" text={gettop3Donators[2].amount} />
                ]
              ]}
            header={[
              '',
              <span style={{ marginTop: "20px", color: "242222", fontWeight: "1000" }}>Wallet</span>,
              <span style={{ marginTop: "20px", color: "242222", fontWeight: "1000" }}>Donated [eth]</span>,
            ]}
            maxPages={1}
            noPagination
            onPageNumberChanged={function noRefCheck() { }}
            pageSize={3}
          />
        </div>
      </center>
    </>
    )
  }


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