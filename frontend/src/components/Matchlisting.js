import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Matachlisting = () =>{

     const [matches, setMatches] = useState([]);
     const [loading, setLoading] = useState(true);

     const API_URL = "https://v3.football.api-sports.io";

     const getTommorowDate = () => {
        
        const tomorrow =new Date();
        tomorrow.setDate(tomorrow.getDate()+1);
        return tomorrow.toISOString().split('T')[0];

     }

    useEffect(() => {

      async function fetchMatches() {

        const date=getTommorowDate();
        
      try {
        const response = await fetch(`https://v3.football.api-sports.io/fixtures?date=${date}`,
           {

               headers:{
                 "x-rapidapi-host": "v3.football.api-sports.io",
                 "x-rapidapi-key": "1f31f08144e9007c1ddb372f3382b179"
               },
           }

        );
        const data = await response.json();

        const ScheduledMatches = (data.response || []).filter(
            (match) => match.fixture.status.short === "NS"
        );

        setMatches(ScheduledMatches);

      } catch (error) {
        console.error("Failed to fetch matches", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMatches();
  }, []);

    return (

     <div className="max-w-4xl mx-auto p-6">

         <h1 className="text-2xl font-bold mb-6 text-center">
            Tomorrow's Scheduled Football Matches
        </h1>

        { loading ?  (

            <p className="text-center text-gray-600">Loading matches...</p>

        ) : matches.length ===0 ? (
            <p className="text-center text-gray-600">No matches scheduled for tomorrow.</p>
        ) : (

             <ul className="space-y-4">
          {matches.map((match) => (
            <li
              key={match.fixture.id}
              className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">
                  {match.teams.home.name} vs {match.teams.away.name}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(match.fixture.date).toLocaleString()}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                {match.league.name}, {match.league.country}
              </div>
              {match.fixture.venue.name && (
                <div className="text-sm text-gray-500">
                  Venue: {match.fixture.venue.name}, {match.fixture.venue.city}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    
     <div className="text-center mt-6">
        <a href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </a>
      </div>
    </div>
        
         
    
    
    
     

    //    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-12">
    //   <h2 className="text-2xl font-semibold mb-6 text-center">Upcoming Matches</h2>
    //   {loading && <p className="text-center text-gray-600">Loading matches...</p>}
    //   {!loading && matches.length === 0 && (
    //     <p className="text-center text-gray-600">No upcoming matches found.</p>
    //   )}
    //   <ul>
    //     {matches.map((match) => (
    //       <li
    //         key={match.idEvent}
    //         className="border border-gray-300 rounded-lg p-4 mb-4 hover:shadow-md transition"
    //       >
    //         <div className="text-lg font-medium mb-2">
    //           <span className="text-blue-700">{match.strHomeTeam}</span> vs{" "}
    //           <span className="text-red-700">{match.strAwayTeam}</span>
    //         </div>
    //         <div className="text-gray-600">
    //           Scheduled at:{" "}
    //           {new Date(match.dateEvent + "T" + match.strTime).toLocaleString()}
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    //   <div className="text-center mt-6">
    //     <Link to="/" className="text-blue-600 hover:underline">
    //       ← Back to Home
    //     </Link>
    //   </div>
    // </div>

    )

}
export default Matachlisting;