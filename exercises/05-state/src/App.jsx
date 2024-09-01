import "./App.css";
// Import LessText here
import DiceRoller from "./components/DiceRoll/DiceRoll";
import LessText from "./components/LessText/LessText";
import Subscribe from "./components/Subscribe/Subscribe";


function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        <LessText text = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentia" 
        maxLength = {50}
        />
        <Subscribe />
      </div>
      <div className="pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Dice Roll</h1>
          <DiceRoller />
        </div>
      </div>
    </>
  );
}

export default App;
