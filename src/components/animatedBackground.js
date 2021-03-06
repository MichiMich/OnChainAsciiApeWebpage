import "./css/flyingApes.css"
import ape1 from "./img/transparent/1.png"
import ape2 from "./img/transparent/2.png"
import ape3 from "./img/transparent/3.png"
import ape4 from "./img/transparent/4.png"
import ape5 from "./img/transparent/5.png"
import ape6 from "./img/transparent/6.png"
import ape7 from "./img/transparent/7.png"
import ape8 from "./img/transparent/8.png"

export function AnimatedBackground() {
    var height = window.innerWidth / 8 + "px";
    return (
        <>
            <div className="snowflakes" aria-hidden="true">
                <div className="snowflake">
                    <img src={ape1} style={{ height: height, opacity: "0.4" }} alt="" />
                </div>

                <div className="snowflake">
                    <img src={ape2} style={{ height: height, opacity: "0.4" }} alt="" />
                </div>

                <div className="snowflake">
                    <img src={ape3} style={{ height: height, opacity: "0.4" }} alt="" />
                </div>

                <div className="snowflake">
                    <img src={ape4} style={{ height: height, opacity: "0.4" }} alt="" />
                </div>

                <div className="snowflake">
                    <img src={ape5} style={{ height: height, opacity: "0.4" }} alt="" />
                </div>

                <div className="snowflake">
                    <img src={ape6} style={{ height: height, opacity: "0.4" }} alt="" />
                </div>

                <div className="snowflake">
                    <img src={ape7} style={{ height: height, opacity: "0.4" }} alt="" />
                </div>
                <div className="snowflake">
                    <img src={ape8} style={{ height: height, opacity: "0.4" }} alt="" />
                </div>
            </div>
        </>

    )
}