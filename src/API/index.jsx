import {useEffect} from 'react'
// import AllPlayers from '/components/AllPlayers'

export default function FetchAllPlayers({setPlayersList}){
    const cohortName = '2302-ACC-ET-WEB-PT';
    // Use the APIURL variable for fetch requests
    const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

    useEffect(()=>{
        const cohortName = '2302-ACC-ET-WEB-PT';
        const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

        async function fetchPlayers(){
            try {
                //fetch logic goes here
                const response = await fetch(`${APIURL}players`);
                const result = await response.json();
                console.log(contacts);
                setPlayersList(result)
            } catch (error){
                console.error(error);
            }
        }
        fetchPlayers();//is now result. next step is to resolve
    },[])

    return (false)
     
}



