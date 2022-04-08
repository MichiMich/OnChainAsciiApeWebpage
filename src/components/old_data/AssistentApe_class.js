import { Component, useState, useEffect } from "react";
import Account from "../v2/Account.js";
import { JoinRaffle } from "../ContractInteraction.js";


function test2() {


    console.log("test2 called");

}

export class Test extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

        console.log("Component did mount");
    }

    componentDidUpdate() {
        console.log("Component did update");
    }


    test() {
        console.log("test run")
    }

    render() {
        return (
            <>
                <button onClick={JoinRaffle()}>click me</button>
                <Account />
            </>
        )
    }
}

export function Test2() {


    return (
        <>
            <button onClick={JoinRaffle()}>click mu</button>
            <Account />
        </>
    )
}
