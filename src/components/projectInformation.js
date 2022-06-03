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
            <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "15%" }}>

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