import satData from "./satData"; //import info from satData
import styling from "./styling.css";

//This function is update the buttons components 
// there is a fuction that takes parameters
// filtersByTypes = represent  A function that filters satellites based on the orbit type in SatData files
// setSat: A function that updates the state of the displayed satellites.

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {/* Iterate over displaySats using map 
      get array that we wanting to map over displaySats chaning with .map
      iterates over the displaySats array, where sat represents the current orbit type, and id is its index.
      */}
      {displaySats.map((sat, id) => {
        //This sets up an event handler so that when the button is clicked, 
        //it calls the filterByType function with the current orbit type (sat), filtering the displayed satellites accordingly.
        return (                //from app.jsx
          <button onClick={() => filterByType(sat)} key={id}>  {/*key={id}: The key prop, set to the index id, helps React efficiently manage the list of buttons.*/}
            {sat} Orbit   { /*Replace "Placeholder Button" with the orbit type 
            Button Label: The text inside the button displays the orbit type followed by "Orbit" (e.g., "LEO Orbit").*/}
          </button>
        );
      })}
      {/* Button to display all orbits 
      be outside of map function*/}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
