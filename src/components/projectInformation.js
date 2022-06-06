//for list
import { List } from 'antd';
import "./css/antd.css"

import apeNameArray from "./img/ApeNameArray.PNG"
import icy from "./img/ApesForAnimation/icy.png"
import eyes from "./img/ApesForAnimation/facesym.png"
import properties from "./img/ApesForAnimation/apeprops.png"
import apeEyes from "./img/eyes.png"
import specialApe from "./img/transparent/1.png"

export function projectInformations() {

    const data1 = [{
        title: `ApeEyes`,
        content:
            'Every combination of eyes exists only once! Randomly assigned during mint, cleared right after for not getting assigned twice.',
    }]

    const data2 = [
        {
            title: `ApeColor`,
            content:
                '196 Apes have the color code: #ffffff, 9 special apes exist with different clor codes.',

        }]

    const data3 = [
        {
            title: `ApeName`,
            content:
                'Ape eye defining name creation with unique id, 196 apes have a random assigned value choosen by a given name array. 9 apes have a specialized name'
        }]

    const data4 = [
        {
            title: `Facesymmetry and Bananascore`,
            content:
                'Facesymmetry: left eye = right eye->100%, left eye differs from right eye->50%. The bananascore is a randomly assigned value in the range of 60-100.'
        }]


    return (
        <>

            <div style={{ margin: "auto", width: "80%", marginTop: "15%", color: "#ffffff", borderStyle: "solid", borderRadius: "25px", borderWidth: "2px", borderColor: "white" }}>
                <h1 style={{ textAlign: "center", color: "#ffffff" }}>What are OnChainAsciiApes</h1>
                <p style={{ marginLeft: "2%", textAlign: "center" }}>OnChainAsciiApes are a nft creation of 205 Apes completly built with Ascii-Characters only. They are fully onchain generated and randomly assigned during mint. There is no need of a decentral/central storage, because its all onchain and you can query your created nft anytime without any cost or any other service</p>
            </div>
            <div style={{ margin: "auto", width: "80%", marginTop: "5%", color: "#ffffff", borderStyle: "solid", borderRadius: "25px", borderWidth: "2px", borderColor: "white" }}>
                <h1 style={{ textAlign: "center", color: "#ffffff" }}>Why OnChainAsciiApes</h1>
                <p style={{ marginLeft: "2%", textAlign: "center" }}>The OnChainAsciiApes serve as the genesis mint of my brand MichiMich. They will provide future benefits like access to <b>quest informations, genesis-holders only areas with early information access, wl access for future mints</b> and the possibility to give most welcome input to current development projects. The genesis mint should be a nearly free mint and for all who believe in the project, the future or/and just the onchain art and the fun I had developing this.</p>
            </div>
            <div style={{ margin: "auto", width: "80%", marginTop: "10%" }}>

                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={data1}
                    bordered
                    renderItem={(item) => (
                        <List.Item
                            key={item.title}
                            extra={
                                <img
                                    height={150}
                                    alt="logo"
                                    src={apeEyes}
                                />
                            }
                        >
                            <List.Item.Meta
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
                <List
                    itemLayout="vertical"
                    size="large"
                    bordered
                    dataSource={data2}
                    renderItem={(item) => (
                        <List.Item
                            key={item.title}
                            extra={
                                <img
                                    height={150}
                                    alt="logo"
                                    src={specialApe}
                                />
                            }
                        >
                            <List.Item.Meta
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />

                <List
                    itemLayout="vertical"
                    size="large"
                    bordered
                    dataSource={data3}
                    renderItem={(item) => (
                        <List.Item
                            key={item.title}
                            extra={
                                <img
                                    height={150}
                                    alt="logo"
                                    src={apeNameArray}
                                />
                            }
                        >
                            <List.Item.Meta
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
                <List
                    itemLayout="vertical"
                    size="large"
                    bordered
                    dataSource={data4}
                    renderItem={(item) => (
                        <List.Item
                            key={item.title}
                            extra={
                                <img
                                    height={150}
                                    alt="logo"
                                    src={properties}
                                />
                            }
                        >
                            <List.Item.Meta
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>
        </>
    )

    /*
            return (
                <>
                    <div style={{ color: "white" }}>
                        <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item
                                    key={item.title}
                                    extra={
                                        <img
                                            width={272}
                                            alt="logo"
                                            src={apeEyes}
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                </List.Item>
                            )}
                        />
                    </div>
                </>
            )
            */
}