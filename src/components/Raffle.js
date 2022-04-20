import { RaffleMobile } from "./v2/Raffle_mobile";
import { RaffleDesktop } from "./v2/Raffle_desktop";
import Account from "./v2/Account.js"


export function Raffle() {

    if (window.innerWidth <= 768) {
        console.log("display mode mobile");
        return (
            <>
                <Account />
                <RaffleMobile />
            </>
        )
    }
    else {
        console.log("display mode desktop");
        return (
            <>
                <Account />
                <RaffleDesktop />
            </>
        )
    }


}


