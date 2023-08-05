//import FetchAllPlayers from '/src/API/index.jsx'
import {useState,useEffect} from 'react'
import React from 'react'
import SinglePlayer from './SinglePlayer'


// ,setPlayersList setPlayerId, removed frpm props
export default function AllPlayers({playerId,setPlayerId,playersList,setPlayersList}) {
  //const [allPlayersList,setAllPlayersList] = useState([""])
  //const [playerId,setPlayerId] = useState("")

setPlayerId(null)

  useEffect(()=>{
    const cohortName = '2302-ACC-ET-WEB-PT';
    const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

    async function fetchPlayers(){
        try {
            //fetch logic goes here
            const response = await fetch(`${APIURL}players`);
            const result = await response.json();
            console.log('fetchPlayer completed')
            console.log(result);
            console.log(result.data.players);
            setPlayersList(result.data.players);
            console.log(playersList)
        } catch (error){
            console.error(error);
        }
    }
    fetchPlayers();
  },[])

  function openSinglePlayerView(playerId){
    console.log('setPlayerId activated by clicking on playerList')
    console.log(playerId)
    setPlayerId(playerId)
  }

    return (
      <>
      {playerId ?(
        <SinglePlayer playerList={playersList} playerId={playerId} setPlayerId={setPlayerId}/>
      ):(
        <div className="allPlayers">
        <h2>All Players Component Div</h2>
        <table>
            <thead>
                <tr key="tHead">
                    <th colSpan="3">Player List</th>
                </tr>
            </thead>
            <tbody>
                <tr key="tbody">
                    <td key='playerName'>Name</td>
                    <td key='playerBreed'>Breed</td>
                    <td key='playerStatus'>Status</td>
                </tr>
                {React.Children.toArray (playersList.map((player) => {
                    return (
                    <tr key={player.id} onChange={openSinglePlayerView(player.id)}>
                    <td key={player.name}>{player.name}</td>
                    <td key={player.breed}>{player.breed}</td>
                    <td key={player.status}>{player.status}</td>
                    </tr>
                    )
                }))}
            </tbody>
        </table>
      </div>
      )}
      </>
    );
  }

 

