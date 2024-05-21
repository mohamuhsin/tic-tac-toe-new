export default function Player({ initialName, symbol }) {
    return (
        <li>
            <span className="player">
                <span className="player-name">{initialName}</span>
                <span className="player-symbol">{symbol}</span>
            </span>
            <button>Edit</button>
        </li>
    )
}