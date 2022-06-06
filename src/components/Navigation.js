
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { Button, ConnectButton } from "web3uikit";
import { Home } from "./Home.js";
import "./css/styleNavbar.css";
import Account from "./v2/Account.js"
import { PageHeader } from 'antd';
import "./css/styleBanner.css";

export function Navigation() {



    return (<>
        <PageHeader
            ghost={false}
            title="OnChainAsciiApes"
            extra={[
                <Account />
            ]}
        />
        < Home />
    </>



    );



}

/*
<PageHeader
            ghost={false}
            title="OnChainAsciiApes"
            extra={[
                <Account />
            ]}
        >
        </PageHeader>
        < Home /></>

*/
