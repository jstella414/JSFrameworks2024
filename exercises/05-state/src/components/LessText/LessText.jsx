import { useState } from "react";

function LessText({ text = "", maxLength }){

    const [hidden, setHidden] = useState(false);
    return (
        <>
        <p>{!hidden ? text.substring(0, maxLength).trim() : text}</p>
        
        <div className="container mt-4 h1">
        <button 
         type="button"
         className="btn btn-dark"
        onClick = {()=> setHidden(false)} 
        >
            Read more
        </button>

        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setHidden(true)}
        >
          Read Less
        </button>

        </div>
        </>
    )

}
export default LessText;
