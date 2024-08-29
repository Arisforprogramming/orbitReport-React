import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData";


function App() {
  const [sat,setSat] = useState(satData)
  //The code effectively extracts all the orbitType values from the satData array, removes duplicates using Set, 
  //and then converts the Set back into an array. This process ensures that displaySats contains only unique orbit types.
  const displaySats = [...new Set(satData.map((data)=> data.orbitType))]
  return (
    <div>
      <Banner/>
      <Buttons 
       filterByType={filterByType}
       setSat={setSat}
       displaySats={displaySats}/>
      <Table
      sat={sat} />
    </div>
  );
}
const filterByType= (currentType)=>{
  const displaySats = satData.filter((newSatDisplay) => {
     return newSatDisplay.orbitType === currentType;
  });
  setSat(displaySats);
};

export default App;