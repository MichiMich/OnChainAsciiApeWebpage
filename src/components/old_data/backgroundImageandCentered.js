import { Image, Button, Card, Row, Col, PageHeader } from 'antd';
import BananaApe from "./img/BananaColorApe.png";
import Background from "./img/background.jpg"

const centered = {
    position: "fixed",
    top: "50%",
    left: "50%",
    /* bring your own prefixes */
    transform: "translate(-50%, -50%)",
}
const background = {
    background: "red",
}

const wierd = {
    backgroundColor: "#e5e5f7",
    opacity: 0.4,
    background: "linear - gradient(135deg, #444cf755 25 %, transparent 25 %) - 10px 0/ 20px 20px, linear-gradient(225deg, #444cf7 25%, transparent 25%) -10px 0/ 20px 20px, linear- gradient(315deg, #444cf755 25 %, transparent 25 %) 0px 0 / 20px 20px, linear - gradient(45deg, #444cf7 25 %, #e5e5f7 25 %) 0px 0 / 20px 20px",

}
const backgroundImage = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",

}



function MintPage() {


    const { innerWidth: width, innerHeight: height } = window;


    return (
        <>

            {/* <div style={centered}>

                <div>
                    <Button>Join raffle</Button>
                </div>
                <div>
                    <Image src={BananaApe} />
                </div>
            </div> */}

            <div style={{ backgroundImage, width: width, height: height }}>
                <div style={centered}>

                    <div>
                        <Button>Join raffle</Button>
                    </div>
                    <div>
                        <Image src={BananaApe} />
                    </div>
                </div>
                <div>
                    another div
                    {/* <Image src={BananaApe} /> */}
                </div>
                <p>here is the body</p>
            </div>
            <Image src={Background} style={{ width: width, opacity: "0.5" }}>
                <Button>Join raffle</Button>
            </Image>

        </>
    )

}


export default MintPage;