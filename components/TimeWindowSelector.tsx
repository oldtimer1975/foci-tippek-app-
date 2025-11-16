import React from "react";
const TIME_WINDOWS = [
  { key: "0-5", label: "0–5 óra", min: 0, max: 5 },
  { key: "5-15", label: "5–15 óra", min: 5, max: 15 },
  { key: "15+", label: "15+ óra", min: 15, max: 1000 },
];
export default function TimeWindowSelector({ selected, onSelect }) {
  return (
    <div style={{display:"flex",gap:10,justifyContent:"center",margin:"16px 0"}}>
      {TIME_WINDOWS.map(win=>(
        <button key={win.key}
          style={{
            background:selected===win.key?"#FFD700":"#393b4b",
            color:selected===win.key?"#232":"#FFD700", border:"none",
            fontWeight:"bold",padding:"10px 24px",borderRadius:7,cursor:"pointer"
          }}
          onClick={()=>onSelect(win.key)}>
          {win.label}
        </button>
      ))}
    </div>
  );
}
export { TIME_WINDOWS };
