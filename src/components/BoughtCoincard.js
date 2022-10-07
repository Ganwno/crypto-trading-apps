import { useNavigate } from "react-router";

export default function BoughtCoincard({ coin, currentTheme, coinData }) {
    const navigate = useNavigate();
    console.log(coinData)
    return (
        <tr>
            <td>{coin.coin}</td>
            <td></td>
            <td>{parseInt(coin.amount)}
                {parseInt(coin.amount) > 0 && <button onClick={() => { navigate("/buy-crypto/" + "kfj") }} className="sell" style={currentTheme}>Sell</button>}
                <button onClick={() => { navigate("/buy-crypto/" + coinData.name) }} className="buy" style={currentTheme}>Buy</button>
            </td>
        </tr>
    )
}