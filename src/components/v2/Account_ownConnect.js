import { useMoralis } from "react-moralis";
import React, { useEffect, useState } from 'react';
import { Modal, PageHeader, Button } from "antd"
import Icon from '@ant-design/icons';
import { ReactComponent as MetamaskIcon } from "../Icons/metamask.svg";
import { ReactComponent as WalletConnectIcon } from "../Icons/walletconnect.svg";
import "antd/dist/antd.css";

const meatamaskIcon = <Icon component={MetamaskIcon} />
const walletConnectIcon = <Icon component={WalletConnectIcon} />


var activeAccount;

export function getActiveAccount() {
    return (activeAccount);
}

function Account() {
    const { Moralis, isAuthenticated, authenticate, enableWeb3, account, logout } = useMoralis();
    //end - modal antd buttons
    //start - modal antd buttons
    const [isModalVisible, setIsModalVisible] = useState(false);

    async function logInWalletConnect() {
        const user = await Moralis.authenticate({ provider: "walletconnect", chainId: 4 })
        console.log(user)
    }
    /*
        useEffect(() => {
            //only ran on account change
            console.log("useEffect in Account ran");
    
        }, [account])
    */
    function showModal() {
        setIsModalVisible(true);
    };

    function handleOk() {
        setIsModalVisible(false);
    };

    function handleCancel() {
        setIsModalVisible(false);
    };

    function handleAccountChange() {
        if (account) {
            return (
                <>
                    <PageHeader
                        ghost={false}
                        title="OnChainAsciiApes"
                        extra={[
                            <Button key="2">
                                {JSON.stringify(account).slice(1, 7)}
                                ...
                                {JSON.stringify(account).slice(account.length - 3, account.length + 1)}
                            </Button>,
                            <Button key="3" type="primary" onClick={logout}>
                                Logout
                            </Button>,
                        ]}
                    ></PageHeader>
                </>
            )
        }
        else {
            return (
                <>
                    <PageHeader
                        ghost={false}
                        title="OnChainAsciiApes"
                        extra={[
                            <>
                                <Button key="1" type="default" onClick={showModal} >
                                    Connect
                                </Button>
                            </>
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
                        <Button block onClick={() => logInWalletConnect()}>
                            walletconnect
                            {walletConnectIcon}
                        </Button>
                    </Modal>
                </>
            )
        }
    }


    return (
        <>
            <div className="site-page-header-ghost-wrapper"></div>
            <div>
                {handleAccountChange()}
            </div>

        </>
    )
    /*
        if (!account) {
            activeAccount = null;
            console.log("activeAccount", activeAccount);
            return (
                <>
                    <div className="site-page-header-ghost-wrapper" >
                        <PageHeader
                            ghost={false}
                            title="OnChainAsciiApes"
                            extra={[
                                <Button key="1" type="default" onClick={showModal} loading={loadingState}>
                                    {console.log("loadingstate", loadingState)}
                                    Connect
                                </Button>
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
                            <Button block onClick={() => logInWalletConnect()}>
                                walletconnect
                                {walletConnectIcon}
                            </Button>
                        </Modal>
                    </div>
    
    
                </>
            );
    
        }
        activeAccount = account;
        console.log("activeAccount", activeAccount)
        return (
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    title="OnChainAsciiApes"
                    extra={[
                        <Button key="2">
                            {JSON.stringify(account).slice(1, 7)}
                            ...
                            {JSON.stringify(account).slice(account.length - 3, account.length + 1)}
                        </Button>,
                        <Button key="3" type="primary" onClick={logout}>
                            Logout
                        </Button>,
                    ]}
                ></PageHeader>
            </div>
        );
    
    */
}
export default Account;