import React from 'react'; 
import './Player.css'
import playerX from '../../img/X.png'
import playerO from '../../img/O.png'

const Player = (props) => {
    const players = [];
    players['x'] = playerX;
    players['o'] = playerO;

    return (
    <button className='player'>
        <img src={players[props.player]} alt={`Jogador ${props.player.toUpperCase()}`}/>
    </button>
    )
};

export default Player;