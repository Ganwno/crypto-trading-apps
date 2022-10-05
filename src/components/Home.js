import { useThemeContext } from "./context/Theme"
import { TiChartPie } from 'react-icons/ti'
import { RiLock2Line } from 'react-icons/ri'
import { AiOutlineMobile } from 'react-icons/ai';
import { BsEmojiAngry, BsEmojiExpressionless, BsFillEmojiSunglassesFill, BsEmojiHeartEyes } from 'react-icons/bs';

export default function Home() {
    const { currentTheme } = useThemeContext();
    return (
        <div style={currentTheme} className="home">
            <div className="start-trading">
                <h1>Learn, buy & sell crypto easily</h1>
                <div>
                    <p>Crypto-Trade is the easiest place to buy and sell cryptocurrency.<br />
                        Sign up and get started today.
                    </p>
                    <button>Start trading</button>
                </div>
                <img src="https://rockiereact.surielementor.com/static/media/banner-03.e73e194292317d284a55.png" alt="crypto-trade handshake" />
            </div>
            <div className="crypto-main">
                <div className="why-content">
                    <h1>Why Crypto-Trade</h1>
                    <p>Crypto-Trade has a variety of features that <br />
                        make it the best place to start trading</p>
                    <ul>
                        <li>
                            <div className="icon-div">
                                <TiChartPie fontSize={"3rem"} color={"pink"} /></div>
                            <div className="why-content">
                                <h3>Recurring buys</h3>
                                <p>Invest In Cryptocurrency Slowly Over Time By<br />
                                    Scheduling Buys Daily, Weekly, Or Monthly.</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon-div">
                                <RiLock2Line fontSize={"3rem"} color={"rgb(80, 25, 100)"} /></div>
                            <div className="why-content">
                                <h3>Manage your portfolio</h3>
                                <p>Buy And Sell Popular Digital Currencies, Keep<br />
                                    Track Of Them In One Place.</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon-div">
                                <AiOutlineMobile fontSize={"3rem"} color={"rgb(1, 78, 245)"} /></div>
                            <div className="why-content">
                                <h3>Mobile apps</h3>
                                <p>Stay On Top Of The Markets With The Cryptolly<br /> App For Android Or IOS.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="crypto-experience">
                    <div className="emojis">
                        <BsEmojiAngry className="emoji" />
                        <BsEmojiExpressionless className="emoji" />
                        <BsFillEmojiSunglassesFill className="emoji" />
                        <BsEmojiHeartEyes className="emoji" />
                    </div>
                </div>
            </div>
        </div>
    )
}