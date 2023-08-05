import NewPlayerForm from './NewPlayerForm.jsx'
import SinglePlayer from './SinglePlayer.jsx'
import AllPlayers from './AllPlayers.jsx'
import {Routes, Route, Link} from 'react-router-dom'
import {useState} from 'react'

async function handleSubmit(event, {playerId}){
  event.preventDefault();

//   const cohortName = '2302-ACC-ET-WEB-PT';
//   const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

//   try {
//     const response = await fetch(`${APIURL}players/${playerId}`);

//     const result = await response.json();

//     console.log(result);
//     console.log("this is the object of players from");
//     //returns "result" to be used later (example: to render players on the web page)
//     return result;
// } catch (err) {
//     //catch any errors along with a message (in this case, fetchAllPlayers () method)
//     console.error('Uh oh, trouble fetching players!', err);

//   }
//   //console.log("Hello 👋");
}

export default function NavBar({playersList,setPlayersList}) {
  const [playerId,setPlayerId] =useState(null)
    return (
      <div className="navBar">
        <span><p>&nbsp;&nbsp;Navigation Bar&nbsp;&nbsp;</p></span>
        <span className='links'>
          
        <Link to='/AllPlayers.jsx'>&nbsp;&nbsp;View All Players&nbsp;&nbsp;</Link>
        
        <Link to='/NewPlayerForm.jsx'>&nbsp;&nbsp;New Player Form&nbsp;&nbsp;</Link></span>
        
        <span className="searchBar"><form onSubmit={handleSubmit}>
        {/* <label className='searchButton'>
            Enter Player Name or ID:{" "} 
            <input 
            value={playerId} 
            onChange={(e) => setPlayerId(e.target.value)} />
        </label> */}
        <button>Search Players</button>
        </form></span>

        <Routes>
          {/* removed props from AllPlayers, setPlayerId={setPlayerId} playersList={playersList} setPlayersList={setPlayersList} */}
          <Route path="/AllPlayers.jsx" 
          element={<AllPlayers 
          playerId={playerId} 
          setPlayerId={setPlayerId} 
          playersList={playersList} 
          setPlayersList={setPlayersList}/>} />
          
          <Route path="/NewPlayerForm.jsx" element={<NewPlayerForm />} />
        </Routes>
      </div>
    );
  }