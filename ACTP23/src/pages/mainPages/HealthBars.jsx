import { useState, useEffect } from "react";

export default function HealthBars() {
  const [pokemons, setPokemons] = useState([
    { name: "...", image: "" },
    { name: "...", image: "" },
  ]);
  const [hps, setHps] = useState([100, 100]);

  const loadPokemons = () => {
    const id1 = Math.floor(Math.random() * 151) + 1;
    let id2 = Math.floor(Math.random() * 151) + 1;
    while (id2 === id1) id2 = Math.floor(Math.random() * 151) + 1;

    Promise.all(
      [id1, id2].map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json()))
    ).then(data => {
      setPokemons(data.map(p => ({
        name: p.name,
        image: p.sprites.front_default,
      })));
      setHps([100, 100]);
    });
  };

  useEffect(() => { loadPokemons(); }, []);

  const attack = (attacker) => {
    const defender = attacker === 0 ? 1 : 0;
    setHps(prev => {
      const next = [...prev];
      next[defender] = Math.max(0, next[defender] - 10);
      return next;
    });
  };

  const winner = hps[0] === 0 ? pokemons[1].name : hps[1] === 0 ? pokemons[0].name : null;

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <div style={{ display: "flex", gap: "60px", justifyContent: "center", alignItems: "flex-start" }}>
        {pokemons.map((p, i) => (
          <div key={i} style={{ textAlign: "center", width: "200px" }}>
            <img src={p.image} alt={p.name} width={80} height={80} />
            <p style={{ fontWeight: "bold", textTransform: "capitalize", margin: "0 0 8px" }}>{p.name}</p>

            <div style={{ background: "#ddd", borderRadius: "8px", height: "20px", overflow: "hidden" }}>
              <div style={{
                width: `${hps[i]}%`,
                height: "100%",
                background: hps[i] > 50 ? "green" : hps[i] > 25 ? "orange" : "red",
                transition: "width 0.3s"
              }} />
            </div>

            <p style={{ margin: "4px 0 8px" }}>{hps[i]} / 100</p>

            <button onClick={() => attack(i)} disabled={!!winner}>
              Atacar
            </button>
          </div>
        ))}
      </div>

      {winner && <p style={{ marginTop: "16px", fontWeight: "bold", textTransform: "capitalize" }}> {winner} gana!</p>}

      <button onClick={loadPokemons} style={{ marginTop: "16px" }}>Reset</button>
    </div>
  );
}