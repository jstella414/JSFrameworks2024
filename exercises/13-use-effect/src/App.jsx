// Import useEffect here
import { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
// import Axios (or use Fetch)

function App() {
  /**
   * dogImages
   * @type {Array} an array of image URLs
   * @example
   * [
   *     "https://images.dog.ceo/breeds/terrier-scottish/n02097298_7694.jpg",
   *     "https://images.dog.ceo/breeds/lhasa/n02098413_1137.jpg"
   * ]
   */
  const [dogImages, setDogImages] = useState([]);

  /**
   * You may need to set something else in state
   */

  const [hasError, setHasError] = useState(false);
const[selectedNumber, setSelectNumber] = useState("1");

const fetchDogs = async () =>{
    try{
      const { data } = await axios.get(`https://dog.ceo/api/breeds/image/random/${selectedNumber}`);
      setDogImages(data.message);
    }
  catch(err){
    console.error(err);
    setHasError(true);
  }

};


useEffect(() => {
  fetchDogs();
}, [selectedNumber]);

  /**
   * Make an AJAX call with the useEffect hook
   */

  return (
    <div className="App">
      <h1>Dogs</h1>
      {/* Make me a controlled input */}

      <select value= {selectedNumber} onChange ={(e)=>{setSelectNumber(e.target.value)}}>
        <option  value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div className="container">
        {dogImages.map((dogImage, idx) => {
          return <img key={`dog-${idx}`} height="200" src={dogImage} />;
        })}
      </div>
    </div>
  );
}

export default App;
