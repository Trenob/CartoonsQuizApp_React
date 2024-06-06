import React, { useState } from "react";

const Input = ({ id, style }) => {

    var [playerOneName, setPlayerName] = useState(' ');

    var playerTextChanged = (e) => {
        setPlayerName(e.target.value)
    }

    return (
        <div id={id} style={style} >
            <p>Player's Name: {playerOneName}</p>
            <input
                type='text'
                onChange={playerTextChanged}
                value={playerOneName}>
            </input>
        </div>
    );
}

export default Input;