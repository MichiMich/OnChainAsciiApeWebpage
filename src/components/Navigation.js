
import { NotificationProvider } from "web3uikit";
import { Home } from "./Home.js";
import { Quest } from "./Quest.js"
import Account from "./Account.js"
import { PageHeader } from 'antd'
import { NotificationFromWeb3UiKit } from "./notification";
import { AnimatedBackground } from "./animatedBackground.js";

import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

export function Navigation() {

    return (<>

        <NotificationProvider>
            <NotificationFromWeb3UiKit />
            <Router>
                <Routes>
                    <Route path='/' element={
                        <>
                            <AnimatedBackground />
                            <PageHeader
                                ghost={false}
                                title="OnChainAsciiApes"
                                extra={[
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: '0px',
                                        maxWidth: '70px',
                                        marginBottom: "0%",
                                        marginRight: "45%"
                                    }}>
                                        <Account />
                                    </div>
                                ]}
                            />
                            < Home />
                        </>
                    } />
                    <Route path='/quest' element={
                        <>
                            <PageHeader
                                ghost={false}
                                title="OnChainAsciiApes"
                                extra={[
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: '0px',
                                        maxWidth: '70px',
                                        marginBottom: "0%",
                                        marginRight: "45%"
                                    }}>
                                        <Account />
                                    </div>
                                ]}
                            />
                            <Quest />
                        </>
                    } />
                </Routes>
            </Router>

        </NotificationProvider>
    </>
    );

}
