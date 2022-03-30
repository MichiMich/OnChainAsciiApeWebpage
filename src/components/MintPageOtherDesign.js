import BananaApe from "./img/BananaColorApe.png";
import { useMoralis } from "react-moralis";
import "./css/main.css"

function MintPage() {
    const { account } = useMoralis();

    if (!account) {
        return (
            <>

                <section id="banner">
                    <div className="inner">


                        <h1>connect wallet first</h1>
                        <div>
                            <a className='image featured'><img src={BananaApe}></img></a>
                        </div>
                        <footer>
                            <p><strong>Results here</strong>
                            </p>
                        </footer>

                    </div>
                </section>
            </>
        )
    }

    return (
        <>

            <section id="banner">
                <div className="inner">

                    <header>
                        <a href="#main" className="button primary">Join Raffle</a>
                    </header>
                    <div>
                        <a className='image featured'><img src={BananaApe}></img></a>
                    </div>
                    <footer>
                        <p><strong>Results here</strong>
                        </p>
                    </footer>

                </div>
            </section>
        </>
    )

}


export default MintPage;