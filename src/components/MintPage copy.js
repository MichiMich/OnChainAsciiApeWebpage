import { Image, Button, Card, Row, Col, PageHeader } from 'antd';
import Title from 'antd/lib/skeleton/Title';
import BananaApe from "./img/BananaColorApe.png";
import './css/main.css'


function MintPage() {
    return (
        <>
            <div>
                <Button className="buttons stacked" style={{
                    left: '50%',
                }}>Join raffle</Button>
            </div>

            <div>
                <PageHeader
                    ghost={false}
                    title="Join the raffle"
                    extra={[
                        <Image
                            src={BananaApe}
                            width={"40em"}
                            height={"40em"}
                            style={{
                                display: 'block',
                            }}

                        />
                    ]}
                ></PageHeader>
            </div>
            <section id="banner">
                <div className="inner">

                    <header>
                        <h2>Raffle</h2>
                        <h3>OnChain-AsciiApes</h3>
                    </header>
                    <a href="#main" className="button fit scrolly">Tell Me More</a>
                    <a className='image featured'><img src={BananaApe}></img></a>
                    <p>This is <strong>Twenty</strong>, a free
                        <br />
                        responsive template
                        <br />
                        by <a href="http://html5up.net">HTML5 UP</a>.
                    </p>
                    <footer>
                        <ul className="buttons stacked">
                            <li><a href="#main" className="button fit scrolly">Tell Me More</a></li>
                            <li><a href="#main" className="button fit scrolly">Tell Me less</a></li>
                        </ul>
                    </footer>

                </div>
            </section>
        </>
    )

}


export default MintPage;