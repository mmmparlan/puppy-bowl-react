import {useState} from 'react'



export default function NewPlayerForm() {
  const [playerName,setPlayerName] = useState(null)
  const [playerBreed,setPlayerBreed] = useState(null)
  const [playerUrl,setPlayerUrl] = useState(null)


    async function handleSubmit(event,{playerName,playerBreed,playerUrl}){
      event.preventDefault();
      try {
          const response = await fetch(
              `${APIURL}players`,
              {
                  method: 'POST',
                  headers: {'Content-Type': 'application/json', 
                  },
                  body: JSON.stringify({
                      name: `${playerName}`,
                      breed: `${playerBreed}`,
                      url: `${playerUrl}`,
                  }),
              }
          );
  
          const result = await response.json();
          console.log(result);
          
  
      } catch (error) {
          setError(error.message);
      }
      //console.log("Hello 👋");
  }
 
  

  //need code to setFormView to null after submit button
    return (
      <div className="newPlayerForm">
        <h2>New Player Form</h2>
        <form onSubmit={handleSubmit()}>
        <label>
            Name:{" "} 
            <input 
            type="playerName"
            value={playerName} 
            onChange={(e) => setPlayerName(e.target.value)} />
        </label>
        <label>
            Breed:{" "} 
            <input 
            type="breed" 
            value={playerBreed} 
            onChange={(e) => setPlayerBreed(e.target.value)}/>
        </label>
        <label>
            PlayerUrl:{" "} 
            <input 
            type="" 
            value={playerUrl} 
            onChange={(e) => setPlayerUrl(e.target.value)}/>
        </label>
        <button>Submit</button>
    </form>
      </div>
    );
  }