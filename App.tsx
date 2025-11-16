import React, { useEffect, useState } from "react";
import { fetchLeagues, fetchFixturesByLeague, fetchOddsByFixture } from "./api/footballApi";

export default function App() {
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState<string | null>(null);
  const [fixtures, setFixtures] = useState([]);
  const [selectedFixture, setSelectedFixture] = useState<string | null>(null);
  const [odds, setOdds] = useState<any>(null);
  const [error, setError] = useState<string>("");

  // 1. Lekérdezzük a ligákat induláskor
  useEffect(() => {
    fetchLeagues()
      .then(setLeagues)
      .catch(e => setError(e.message));
  }, []);

  // 2. Liga kiválasztásakor meccsek lekérése
  useEffect(() => {
    if (!selectedLeague) return;
    setFixtures([]);
    setOdds(null);
    fetchFixturesByLeague(selectedLeague)
      .then(setFixtures)
      .catch(e => setError(e.message));
  }, [selectedLeague]);

  // 3. Meccs kiválasztásakor odds lekérés
  useEffect(() => {
    if (!selectedFixture) return;
    setOdds(null);
    fetchOddsByFixture(selectedFixture)
      .then(setOdds)
      .catch(e => setError(e.message));
  }, [selectedFixture]);

  return (
    <div
      style={{
        background: "#191b1d",
        minHeight: "100vh",
        color: "#FFD700",
        padding: 30,
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontWeight: 900,
          marginBottom: 30,
          fontSize: 29,
          letterSpacing: 1.5,
        }}
      >
        ⚽ Foci Tippmix – Liga, Meccs, Odds DEMO
      </h1>
      {error && (
        <div
          style={{
            color: "#f44",
            margin: 14,
            background: "#fff2",
            padding: 7,
            borderRadius: 5,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      )}
      {/* LIGA LISTA */}
      <h2 style={{ marginBottom: 8, marginTop: 0, color: "#fff" }}>1️⃣ Topligák:</h2>
      <ul style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        listStyle: "none",
        padding: 0,
        margin: "8px 0 20px 0",
        justifyContent: "center"
      }}>
        {leagues.map((l: any) => (
          <li
            key={l.id}
            style={{
              background: selectedLeague === l.id ? "#FFD700" : "#262d36",
              color: selectedLeague === l.id ? "#1a1c1f" : "#FFD700",
              cursor: "pointer",
              padding: "8px 23px",
              borderRadius: 8,
              fontWeight: "bold",
              margin: 0,
              fontSize: 16,
              border: "1.5px solid #FFD70033"
            }}
            onClick={() => {
              setSelectedLeague(l.id);
              setSelectedFixture(null);
              setError("");
            }}
          >
            {l.name}
          </li>
        ))}
      </ul>

      {/* MECCSEK LISTA */}
      {selectedLeague && (
        <>
          <h2 style={{ marginBottom: 8, marginTop: 12, color: "#fff" }}>
            2️⃣ Meccsek – {fixtures.length} db
          </h2>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              listStyle: "none",
              padding: 0,
              margin: "5px 0 18px 0",
              alignItems: "center",
            }}
          >
            {fixtures.length === 0 && (
              <li style={{ color: "#999", fontSize: 17, padding: 10 }}>Nincs elérhető meccs!</li>
            )}
            {fixtures.slice(0, 10).map((f: any) => (
              <li
                key={f.id}
                style={{
                  background: selectedFixture === f.id ? "#70c1b3" : "#222d",
                  color: selectedFixture === f.id ? "#000" : "#FFD700",
                  cursor: "pointer",
                  padding: "8px 23px",
                  borderRadius: 6,
                  fontWeight: "bold",
                  fontSize: 16,
                  margin: "3px 0",
                  border: "1px solid #FFD70022"
                }}
                onClick={() => {
                  setSelectedFixture(f.id);
                  setError("");
                }}
              >
                {f.homeTeam} - {f.awayTeam} | {f.date}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* ODDS */}
      {selectedFixture && (
        <div
          style={{
            marginTop: 30,
            padding: "22px 18px",
            background: "#fff",
            color: "#222",
            borderRadius: 14,
            maxWidth: 500,
            marginRight: "auto",
            marginLeft: "auto",
            fontSize: 17,
            boxShadow: "0 4px 17px #0002",
          }}
        >
          <h2 style={{ margin: 0, color: "#009fe3" }}>3️⃣ Odds (tippmix szorzók):</h2>
          {odds ? (
            <pre
              style={{
                background: "#f7f7f7",
                color: "#222",
                borderRadius: 8,
                padding: 10,
                fontSize: 16,
                overflowX: "auto",
              }}
            >
              {JSON.stringify(odds, null, 2)}
            </pre>
          ) : (
            <div style={{ color: "#009fe3", fontSize: 18, marginTop: 12 }}>
              Odds adatok betöltése...
            </div>
          )}
        </div>
      )}
    </div>
  );
}
