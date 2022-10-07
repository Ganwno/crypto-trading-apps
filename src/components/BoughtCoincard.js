import { useNavigate } from "react-router";

export default function BoughtCoincard({ coin, currentTheme, coinData }) {
    const navigate = useNavigate();
    return (
        <tr>
            <td>{coin.coin}</td>
            <td>{parseInt(coin.amount)}</td>
            <td>
                {parseInt(coin.amount) > 0 && <button onClick={() => { navigate("/trades/" + coin.coin + ":sell") }} className="sell" style={currentTheme}>Sell</button>}
                <button onClick={() => { navigate("/buy-crypto/" + coinData.name) }} className="buy" style={currentTheme}>Buy</button>
            </td>
        </tr>
    )
}