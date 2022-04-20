
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

export function Navigation() {

    const [show, setshow] = useState(false);

    return (
        <Router>
            <div className="navbar">
                <h2>OnChainAsciiApes</h2>
                <Button onClick={() => setshow(true)} text='Menu' />

            </div>
            {show &&
                <div style={{ height: "100%", width: "100%", background: "black", position: "fixed", top: "0px", left: "0px" }}>
                    <h1 onClick={() => setshow(false)} style={{ position: "fixed", top: "0px", right: "20px", color: "white" }}>X</h1>
                    <ul>
                        <li ><Link to="/"><h2 style={{ color: "white" }} onClick={() => setshow(false)}>Home</h2></Link></li>
                        <li><Link to="/raffle"><h2 style={{ color: "white" }} onClick={() => setshow(false)}>Raffle</h2> </Link></li>

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
