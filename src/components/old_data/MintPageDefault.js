import { Image, Button } from 'antd';
import BananaApe from "./img/BananaColorApe.png";
import Background from "./img/BananaColorApe.png"
import DevilApe from "./img/DevilApe.svg";
import windowdimo from "./windowdimension.js"

const centered = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
}
const backgroundImage = {
    backgroundImage: `url(${DevilApe})`,
    backgroundSize: "contain",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",

}










function MintPage() {

    //use of useEffect() in windowdimension.js ->useWindowDimensions which updates the window data
    const { height, width } = windowdimo()





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
            <Image src={Background} style={{ width: width, opacity: "0.5" }}>
                <Button>Join raffle</Button>
            </Image>
            <div style={{ backgroundImage, width: width, height: height }}>
                <div style={centered}>
                    <a >
                        <img src={DevilApe} />
                    </a>
                </div>
            </div>
            <InteractWithContract />
        </>
    )

}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Component />, rootElement);

export default MintPage;