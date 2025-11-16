import React from "react";

export default function LeagueSelector({ leagues, selected, onSelect }) {
  return (
    <div style={{ display: "flex", flexWrap:"wrap",justifyContent:"center",gap:7 }}>
      {leagues.map(l =>
        <button key={l.league_id}
          style={{
            background: selected===l.league_id ? "#70c1b3" : "#282e38",
            color: "#fff", fontWeight: "bold", border: "none",
            borderRadius: 6, padding: "8px 23px", margin: "3px", cursor: "pointer"
          }}
          onClick={() => onSelect(l.league_id)}
        >
          {l.league_name} ({l.country_name})
        </button>
      )}
    </div>
  );
}
