import { Image, Button, Card, Row, Col, PageHeader } from 'antd';
import BananaApe from "./img/BananaColorApe.png";
import './css/main.css'


function MintPage() {
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