import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";
function App() {
  const meanings = emojipedia.map((val)=>{
    return val.meaning.substring(0,100);
  });
  console.log(meanings);
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
       {emojipedia.map( val => (<Term emoji={val.emoji} name={val.name} description={val.meaning} key={val.id} />))}
      </dl>
    </div>
  );
}

export default App;
