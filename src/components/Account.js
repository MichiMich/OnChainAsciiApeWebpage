import { useMoralis } from "react-moralis";
import React, { useState } from 'react';
import { Modal, PageHeader, Button } from "antd"
import Icon from '@ant-design/icons';
import { ReactComponent as MetamaskIcon } from "./Icons/metamask.svg";
import { ReactComponent as WalletConnectIcon } from "./Icons/walletconnect.svg";

const meatamaskIcon = <Icon component={MetamaskIcon} />
const walletConnectIcon = <Icon component={WalletConnectIcon} />



function Account() {
    const { Moralis, isAuthenticated, authenticate, enableWeb3, account, logout } = useMoralis();


    const logInWalletConnect = async () => {
        const user = await Moralis.authenticate({ provider: "walletconnect", chainId: 4 })
        console.log(user)
    }

    //start - modal antd buttons
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //end - modal antd buttons

    const connectButton = () => {
        console.log("accc", account)
        if (!account) {
            return (
                <>
                    <a className="button" onClick={showModal}>Connect Wallet</a>


                    <Modal title="Choose your wallet" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <input type="submit" id="image-button" value="Metamask" onClick={() => enableWeb3()}></input>
                        <input type="submit" id="image-button-walletconnect" value="WalletConnect" onClick={logInWalletConnect}></input>
                    </Modal>

                </>
            );
        }
        return ({ account })

    }


    if (!account) {
        console.log("not connected")
        return (
            <>

                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        title="OnChainAsciiApes"
                        extra={[
                            <Button key="1" type="primary" onClick={showModal}>
                                Connect
                            </Button>,
                        ]}
                    ></PageHeader>


                    <Modal title="Choose your wallet" visible={isModalVisible} onCancel={handleCancel}
                        footer={[<Button key="back" onClick={handleCancel}>
                            Cancel
                        </Button>]} >
                        <Button block onClick={() => enableWeb3()}>
                            Metamask
                            {meatamaskIcon}
                        </Button>
                        <Button block onClick={logInWalletConnect()}>
                            walletconnect
                            {walletConnectIcon}
                        </Button>
                    </Modal>
                </div>


            </>
        );

    }
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                title="OnChainAsciiApes"
                extra={[
                    <Button key="1">
                        {JSON.stringify(account).slice(1, 7)}
                        ...
                        {JSON.stringify(account).slice(account.length - 3, account.length + 1)}
                    </Button>,
                    <Button key="1" type="primary" onClick={logout}>
                        Logout
                    </Button>,
                ]}
            ></PageHeader>
        </div>
    );


}
export default Account;