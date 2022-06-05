import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Input } from "web3uikit";
const { Meta } = Card;

export function MintCard() {
    return (
        <>
            <Card

                headStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', border: 0 }}
                bodyStyle={{ backgroundColor: 'rgba(255, 0, 0, 0)', border: 0, opacity: 1 }}
                // extra={<Button>Test</Button>}
                style={{ width: "50vw", opacity: "1" }}
                // cover={
                //     < img
                //         alt="example"
                //         src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                //     />
                // }
                actions={
                    [
                        <Input
                            id="inputForNrOfWantedNfts"
                            style={{ textcolor: "#ffffff", marginRight: "2%" }}
                            min="1"
                            max="5"
                            label="Nr of wanted apes?"
                            name="inputForNrOfWantedNfts"
                            onBlur={function noRefCheck() { }}
                            onChange={function noRefCheck() { }}
                            type="number"
                            labelBgColor="#ffffff"
                            state="white"
                        />,
                        <Button
                            style={{ marginLeft: "20%" }}
                            id="mint_button"
                            onClick={() => alert("clicked")}
                            text="Mint (0.001 eth/ape)"
                            theme="outline"
                            type="button"
                        />,

                    ]}
            >
                <Meta style={{ color: "green" }}
                    title="Mint Price 0.005 eth"
                    description="This is the description"
                />
            </Card >
        </>
    )
}