
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { Button } from "web3uikit";

import { Raffle } from './Raffle.js';
import { Home } from "./Home.js";

export function Navigation() {
    return (
        <Router>

            <div className="App">
                <Link to="/"> <Button text="Home" ></Button></Link>
                <Link to="/raffle"> <Button text="Raffle" >Mobile</Button></Link>
            </div>
            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/raffle' element={< Raffle />}></Route>
            </Routes>
        </Router>
    );
}