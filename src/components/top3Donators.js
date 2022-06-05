import { useMoralisQuery } from "react-moralis";

export function GetTop3Donators() {

    const query = useMoralisQuery(
        "DonatorsUpdate");





    const basicQuery = async () => {
        const results = await query();

        //alert("Successfully retrieved " + results.length + " monsters.");
        // Do something with the returned Moralis.Object values

    };

    return (

        <button onClick={() => basicQuery()}>try getting data</button>
    )
}


/*
import { useMoralis, query } from "react-moralis";

async function getTop3Donators() {
    const query = query("DonatorsUpdate")
    const donators = await query.find();
    console.log(donators)

}

export function ShowTop3Donators() {
    return (
        <>
            <div>
                <h1>top3Donators</h1>
            </div>
        </>
    )
}
*/