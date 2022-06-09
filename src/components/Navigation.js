
import { NotificationProvider } from "web3uikit";
import { Home } from "./Home.js";
import Account from "./Account.js"
import { PageHeader } from 'antd';

import { AnimatedBackground } from "./animatedBackground.js";

export function Navigation() {

    return (<>
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
        <NotificationProvider>
            < Home />
        </NotificationProvider>

    </>
    );

}
