import React from "react";
export default function OddsDisplay({ odds }) {
  if (!odds) return <div style={{color:"#bbb"}}>Nincs odds adat.</div>;
  return (
    <div>
      <strong>ODDS: </strong>
      <span style={{marginRight:10}}>1: <b>{odds.odd_home||"?"}</b></span>
      <span style={{marginRight:10}}>X: <b>{odds.odd_draw||"?"}</b></span>
      <span>2: <b>{odds.odd_away||"?"}</b></span>
    </div>
  );
}
