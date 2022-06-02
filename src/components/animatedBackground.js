import "./css/snoflake.css"
import ape181 from "./img/ApesForAnimation/181.svg"
import ape198 from "./img/ApesForAnimation/198.svg"
import ape200 from "./img/ApesForAnimation/200.svg"
import ape201 from "./img/ApesForAnimation/201.svg"
import ape202 from "./img/ApesForAnimation/202.svg"
import ape203 from "./img/ApesForAnimation/203.svg"
import ape204 from "./img/ApesForAnimation/204.svg"

export function AnimatedBackground() {
    return (
        <>
            <div class="snowflakes" aria-hidden="true">
                <div class="snowflake">
                    ❄
                </div>
                <div class="snowflake">
                    ❄
                </div>
                <div class="snowflake">
                    <img src={ape181} style={{ height: "125px" }} />
                </div>
                <div class="snowflake">
                    ❄
                </div>
                <div class="snowflake">
                    ❄
                </div>
                <div class="snowflake">
                    <img src={ape198} style={{ height: "125px" }} />
                </div>
                <div class="snowflake">
                    ❄
                </div>
                <div class="snowflake">
                    <img src={ape202} style={{ height: "125px" }} />
                </div>
                <div class="snowflake">
                    ❄
                </div>
                <div class="snowflake">
                    <img src={ape200} style={{ height: "125px" }} />
                </div>
                <div class="snowflake">
                    ❄
                </div>
                <div class="snowflake">
                    ❄
                </div>
                <div class="snowflake">
                    <img src={ape201} style={{ height: "125px" }} />
                </div>
                <div class="snowflake">
                    ❄
                </div>
                <div class="snowflake">
                    ❄
                </div>
                <div class="snowflake">
                    <img src={ape204} style={{ height: "125px" }} />
                </div>
                <div class="snowflake">
                    ❄
                </div>
                <div class="snowflake">
                    <img src={ape203} style={{ height: "125px" }} />
                </div>
            </div>
        </>

    )
}