import { Button, Input } from "web3uikit";
import btcDevilApe from "./img/transparent/btcDevilApeTransp.png"
import { HandleMoralisWeb3, TriggerMint } from "./InteractWithMintContract.js";
import { ShowTop3Donators } from "./top3Donators.js";
import { projectInformations } from "./projectInformation.js";
import { HandleDonation } from "./donate.js";
import { NotificationFromWeb3UiKit } from "./notification";


//todo: define correct nft cost at .env file -> 0.005 eth
export function Home() {

    return (
        <>
            <div style={{ backgroundColor: "#FF3CAC", backgroundImage: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 25%, #2B86C5 100%)" }}>
                {/* moralis functions */}
                <HandleMoralisWeb3 />

                {mintInput()}
                <ShowTop3Donators />
                <HandleDonation />
                {projectInformations()}

                {NotificationFromWeb3UiKit()}

                {/* line for creating footer part */}
                <div style={{ paddingTop: "8%" }}>
                    <hr style={{ border: "1px solid white", width: "100%" }} />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        paddingBottom: "0.5vh"
                    }}
                >
                    <a href="https://discord.gg/VV7yeHfp4C" target="_blank">
                        <svg style={{ height: "30px", width: "30px" }} viewBox="-10.63 -.07077792 823.87 610.06955549" width="2500" xmlns="http://www.w3.org/2000/svg"><path d="m678.27 51.62c90.35 132.84 134.97 282.68 118.29 455.18-.07.73-.45 1.4-1.05 1.84-68.42 50.24-134.71 80.73-200.07 100.95a2.55 2.55 0 0 1 -2.81-.95c-15.1-21.01-28.82-43.16-40.84-66.42-.69-1.37-.06-3.02 1.36-3.56 21.79-8.21 42.51-18.05 62.44-29.7 1.57-.92 1.67-3.17.22-4.25-4.23-3.14-8.42-6.44-12.43-9.74-.75-.61-1.76-.73-2.61-.32-129.39 59.75-271.13 59.75-402.05 0-.85-.38-1.86-.25-2.59.35-4 3.3-8.2 6.57-12.39 9.71-1.45 1.08-1.33 3.33.25 4.25 19.93 11.43 40.65 21.49 62.41 29.74 1.41.54 2.08 2.15 1.38 3.52-11.76 23.29-25.48 45.44-40.86 66.45-.67.85-1.77 1.24-2.81.92-65.05-20.22-131.34-50.71-199.76-100.95-.57-.44-.98-1.14-1.04-1.87-13.94-149.21 14.47-300.29 118.18-455.18.25-.41.63-.73 1.07-.92 51.03-23.42 105.7-40.65 162.84-50.49 1.04-.16 2.08.32 2.62 1.24 7.06 12.5 15.13 28.53 20.59 41.63 60.23-9.2 121.4-9.2 182.89 0 5.46-12.82 13.25-29.13 20.28-41.63a2.47 2.47 0 0 1 2.62-1.24c57.17 9.87 111.84 27.1 162.83 50.49.45.19.82.51 1.04.95zm-339.04 283.7c.63-44.11-31.53-80.61-71.9-80.61-40.04 0-71.89 36.18-71.89 80.61 0 44.42 32.48 80.6 71.89 80.6 40.05 0 71.9-36.18 71.9-80.6zm265.82 0c.63-44.11-31.53-80.61-71.89-80.61-40.05 0-71.9 36.18-71.9 80.61 0 44.42 32.48 80.6 71.9 80.6 40.36 0 71.89-36.18 71.89-80.6z" fill="white" /></svg>
                    </a>
                    <a href="https://twitter.com/OnChainAsciiApe" target="_blank">
                        <svg style={{ height: "30px", width: "30px" }} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                    </a>
                    <a href="https://opensea.io/collection/onchainasciiapes" target="_blank">
                        <svg style={{ height: "30px", width: "30px" }} viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z" fill="white" />
                        </svg>
                    </a>
                    <a href="https://rarible.com/OnChainAsciiApes/items" target="_blank">
                        <svg style={{ height: "30px", width: "30px" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.8 0A4.79 4.79 0 000 4.8v14.4A4.79 4.79 0 004.8 24h14.4a4.79 4.79 0 004.8-4.8V4.8A4.79 4.79 0 0019.2 0zm1.32 7.68h8.202c2.06 0 3.666.44 3.666 2.334 0 1.137-.671 1.702-1.427 1.898.904.268 1.558 1 1.558 2.16v2.131h-3.451V14.18c0-.62-.37-.87-1-.87H9.572v2.893H6.12zm3.452 2.5v.834h4.155c.452 0 .726-.06.726-.416 0-.358-.274-.418-.726-.418z" fill="white">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>

        </>);


}


function mintInput() {
    return (
        <>
            <center style={{
                marginTop: "0%", marginLeft: "2%", marginRight: "2%", position: "relative"
            }}>
                <div style={{ width: "100%" }}>
                    <img src={btcDevilApe} alt="AssistandApe" style={{ height: "50vw", maxWidth: "500px", maxHeight: "500px" }} />
                </div>

                <h1 style={{ color: "white" }}>Mint here</h1>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '10px',
                        maxWidth: '700px'
                    }}
                >

                    <div style={{ float: "left", marginRight: "2%", width: "200px", backgroundColor: "white", borderRadius: "20px", borderStyle: "solid" }}>
                        <Input
                            id="inputForNrOfWantedNfts"
                            min="1"
                            max="5"
                            label="Nr apes"
                            name="inputForNrOfWantedNfts"
                            onBlur={function noRefCheck() { }}
                            onChange={function noRefCheck() { }}
                            type="number"
                            labelBgColor="#ffffff"
                        />
                    </div>

                    <div>
                        <Button
                            id="mint_button"
                            onClick={() => TriggerMint(document.getElementById("inputForNrOfWantedNfts").value)}
                            text="Mint (0.005 eth)"
                            theme="outline"
                            type="button"
                        />
                    </div>
                </div>
            </center>
        </>
    )
}