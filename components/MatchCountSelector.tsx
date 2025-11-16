import React from "react";
const OPTS = [3,5,7,10];
export default function MatchCountSelector({ selected, onSelect }) {
  return (
    <div style={{display:"flex",gap:12,justifyContent:"center",margin:"15px 0 5px 0"}}>
      {OPTS.map(opt=>(
        <button key={opt}
         style={{
           background:selected===opt?"#009fe3":"#444",
           color:"#fff", border:"none", fontWeight:"bold",
           padding:"8px 17px", borderRadius:4, cursor:"pointer"
         }}
         onClick={()=>onSelect(opt)}>{opt} meccs</button>
      ))}
    </div>
  );
}
