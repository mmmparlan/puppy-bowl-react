import {useEffect} from 'react'


export default function SinglePlayer({playersList,playerId,setPlayerId}) {
  console.log("this is the playersList")
  console.log(playersList)

  useEffect(()=>{
    const cohortName = '2302-ACC-ET-WEB-PT';
    const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

    async function fetchSinglePlayer(){
      const response = await fetch(`${APIURL}players/${playerId}`);
      const result = await response.json();
      console.log(result);
      console.log('this is the single player result');
      return result;

    }
    fetchSinglePlayer()
  },[])

  const playerDetails = fetchSinglePlayer()

    return (
      <div className="singlePlayer">
        <h2>Single Player</h2>
        <img src={playerDetails.data.player.imageUrl} id='singleImage'></img>
        <table>
            <thead>
                <tr key="tHead">
                    <th colSpan="2">Player Details</th>
                </tr>
            </thead>
            <tbody>
                <tr key="tbody">
                    <td key='name'>Name:</td>
                    <td key='playersName'>{playerDetails.data.player.name}</td>
                </tr>
                <tr key="tbody">
                    <td key='breed'>Breed:</td>
                    <td key='playersBreed'>{playerDetails.data.player.breed}</td>
                </tr>
                <tr key="tbody">
                    <td key='status'>Status:</td>
                    <td key='playersStatus'>{playerDetails.data.player.status}</td>
                </tr>
                <tr key="tbody">
                    <td key='teamId'>Team:</td>
                    <td key='playersTeamId'>{playerDetails.data.player.teamId}</td>
                </tr>

            </tbody>
        </table>
      </div>
    );
  }