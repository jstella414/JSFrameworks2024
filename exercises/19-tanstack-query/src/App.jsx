import "./App.css";

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
// import Axios (or use Fetch)
// import something else here

function App() {

  const fetchCharacter = async () => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character');
    return data.results;
  };
  
  /**
   * Set up Tanstack Query here
   */

  const { data : characters = [], isPending, isError, error } = useQuery({
    queryKey: ['character'],
    queryFn: fetchCharacter,
  });


  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{/* Plugin character name here */}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            <img
              height="250"
              src="https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg"
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select id="dropdown" type="text">
              <option></option>
              {characters.map((name) => {
          return(
              <option value={name.id} key={`character-${name.id}}`}>{name.name}</option>
        )
          
          })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
