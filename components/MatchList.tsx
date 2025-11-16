import React from "react";
import OddsDisplay from "./OddsDisplay";
import { getHourDiff } from "../utils/timeUtils";

export default function MatchList({ matches, timeWindow, matchCount, oddsMap }) {
  if (!matches.length) return <div style={{textAlign:"center",marginTop:30,color:"#FFD700"}}>Nincs meccs!</div>;
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:13}}>
      {matches.slice(0,matchCount).map(m=>
        <div key={m.fixture_id}
          style={{
            background:"#fff", borderRadius:12, boxShadow:"0 2px 12px #0002",
            padding:"20px 26px",minWidth:310,maxWidth:440,
          }}>
          <div style={{display:"flex",gap:10,fontWeight:"bold",fontSize:19,color:"#009fe3"}}>
            {m.event_home_team} <span style={{opacity:.5}}> vs </span> {m.event_away_team}
          </div>
          <div style={{margin:"8px 0 2px 0", fontWeight:500, color:"#222"}}>
            🗓️ {m.event_date} | ⏰ {m.event_time}
          </div>
          <div style={{fontSize:13,color:"#70c1b3"}}>{m.league_name} | {m.country_name}</div>
          <div style={{marginTop:8}}>
            <OddsDisplay odds={oddsMap[m.fixture_id]}/>
          </div>
        </div>
      )}
    </div>
  );
}
