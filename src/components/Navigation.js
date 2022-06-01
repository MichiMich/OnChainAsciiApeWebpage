
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { Button, ConnectButton } from "web3uikit";
import { Raffle } from './Raffle.js';
import { Home } from "./Home.js";
import "./css/styleNavbar.css";
import { useState } from 'react';
import Account from "./v2/Account.js"
import { Row, Col } from 'antd';
import { Menu, Dropdown, PageHeader, Descriptions } from 'antd';
import "./css/styleBanner.css";

export function Navigation() {

    const [show, setshow] = useState(false);


    return (
        <Router>
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    title="OnChainAsciiApes"
                    extra={[
                        <Account />,
                        <Button theme="outline" onClick={() => setshow(true)} text='...' />
                    ]}
                >
                </PageHeader>
            </div>

            {show &&
                <div style={{ height: "100%", width: "100%", background: "black", position: "fixed", top: "0px", left: "0px", opacity: "1" }}>
                    <h1 className='closeButton' onClick={() => setshow(false)} style={{ color: "white" }}>X</h1>
                    <ul className='ulForLinks'>
                        <li className='links'><Link to="/"><h2 style={{ color: "white" }} onClick={() => setshow(false)}>Home</h2></Link></li>
                        <li className='links'><Link to="/raffle"><h2 style={{ color: "white" }} onClick={() => setshow(false)}>Raffle</h2> </Link></li>
                    </ul>
                </div>
            }
            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/raffle' element={< Raffle />}></Route>
            </Routes>
        </Router>
    );
}
