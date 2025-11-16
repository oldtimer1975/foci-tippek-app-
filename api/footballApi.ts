// API-kulcsod legyen biztosan helyesen bemásolva!
const API_KEY = "2029a93e59msh0be1fa66c927d3fp19a59ajsnaedce4f83f49";
const API_HOST = "free-api-live-football-data.p.rapidapi.com";
const BASE_URL = `https://${API_HOST}`;

// LIGÁK lekérése – PONTOS végpont, Playground szerinti!
export async function fetchLeagues() {
  const res = await fetch(`${BASE_URL}/get-popular-leagues`, {
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  });
  const data = await res.json();
  if (data.status === "success" && data.response && data.response.leagues) {
    return data.response.leagues; // <-- Itt tömb jön, pl. [... {id, name, ...}]
  } else {
    throw new Error(data.message || "Nem sikerült lekérni a ligákat!");
  }
}

// MECCSEK lekérése EGY ligára
export async function fetchFixturesByLeague(leagueId: string) {
  const res = await fetch(`${BASE_URL}/get-fixtures-by-league?leagueId=${encodeURIComponent(leagueId)}`, {
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  });
  const data = await res.json();
  if (data.status === "success" && data.response && data.response.fixtures) {
    return data.response.fixtures;
  } else {
    throw new Error(data.message || "Nem sikerült lekérni a meccseket!");
  }
}

// ODDS lekérése egy meccshez
export async function fetchOddsByFixture(fixtureId: string) {
  const res = await fetch(`${BASE_URL}/get-odds-by-fixture?fixtureId=${encodeURIComponent(fixtureId)}`, {
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  });
  const data = await res.json();
  if (data.status === "success" && data.response && data.response.odds) {
    return data.response.odds; // Lehet, hogy tömb, dokumentáció szerint
  } else {
    return null; // Ha nincs odds, ne dobj hibát, csak üres
  }
}
