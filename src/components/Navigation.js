
import { NotificationProvider } from "web3uikit";
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
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0px',
                    maxWidth: '70px',
                    marginBottom: "2%",
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
