/******
 * Import an object of image paths from the images directory and render them to the screen using the map() method
 *
 *  Developer notes:
 *  Use the img tag to render an image syntax: <img src="path" />
 *
 */
import { react } from "react";

import { technologies } from "./images/technologies";
import { phones } from "./images/phones";
import "./App.css";


function App() {

// const moveImage  = (image, index) =>{
//   console.log(image)
// }

  return (
    <div className="App">
      {technologies.map((image, index) => (
          <img style={{maxWidth: "400px"}} src={image} key={`technology-${index}`} />
        ))}
          {/* {<button
                      type="button"
                      className="button button-left"
                      title="Move left"
                      onClick={() => moveImage(image, index)}

                    >
                      MOVE</button>} */}
        


      {Object.values(phones).map((image, index) => (
        <img style={{maxWidth: "400px"}} src={image} key={`phone-${index}`} />
      ))}
    </div>
  );
}

export default App;

  {/* <button
                      type="button"
                      className="button button-left"
                      title="Move left"
                      onClick={() => moveImage(image, index)}

                    >
                      MOVE</button> */}