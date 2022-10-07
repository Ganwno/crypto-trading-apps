import { useRef, useState } from "react";
import { useThemeContext } from "./context/Theme";
import BoughtCoincard from "./BoughtCoincard";

export default function Account({ allCoins }) {
    const { currentTheme } = useThemeContext();
    const [image, setImagae] = useState();
    const avator = useRef();
    const imgUrl = useRef();
    const updateUrl = useRef();
    const user = JSON.parse(localStorage.getItem("user"));
    const boughtCoinsData = user !== null && user.boughtCoins.map(bCoin => ({ ...allCoins.find(aCoin => bCoin.coin === aCoin.symbol) }))


    let styles = {};
    if (user.avatar_url !== "" && user.avatar_url !== undefined) {
        styles = { backgroundImage: `url("+user.avatar_url+")` }
    }
    // avator.current.style = user.avatar_url;
    let file = null;
    let uploadText = "Upload Image Url"

    return (
        <div className="account" style={currentTheme}>
            <h1>{user.username}</h1>
            <div
                className="avator"
                ref={avator}
                style={styles}>
            </div>
            <input
                ref={imgUrl}
                className="imgUrl" type="text" />
            <button style={currentTheme}
                ref={updateUrl}
                className="updateUrl"
            >Update</button>
            <button style={currentTheme}
                className="uploadUrl"
                onClick={() => {
                    if (!([...imgUrl.current.classList].includes("open"))) {
                        updateUrl.current.classList.add("open");
                        imgUrl.current.classList.add("open");
                        uploadText = "Close Input"
                    } else {
                        updateUrl.current.classList.remove("open");
                        imgUrl.current.classList.remove("open");
                    }
                }}
            >{uploadText}</button>
            <table>
                <tbody style={currentTheme}>
                    <tr>
                        <th><h3>Coins</h3></th>
                        <th><h3>Price</h3></th>
                        <th style={{ maxWidth: "max-content" }}><h3>Change In Last 24Hrs</h3></th>
                    </tr>
                    {user.boughtCoins.map(coin =>
                        <BoughtCoincard
                            key={coin.coin}
                            coin={coin}
                            currentTheme={currentTheme}
                            coinData={boughtCoinsData.find(bCoin=>bCoin.symbol===coin.coin)}
                        />)}
                </tbody>

            </table>
        </div>
    )
}