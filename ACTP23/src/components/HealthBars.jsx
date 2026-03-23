import { useState } from "react";

const fighters = [
  { name: "Uno", hp: 100 },
  { name: "Dos", hp: 100 },
];

function HealthBar({ fighter }) {
  const [hp, setHp] = useState(fighter.hp);

  return (
    <div style={{ textAlign: "center", width: "200px" }}>
      <p style={{ fontWeight: "bold", margin: "0 0 8px" }}>{fighter.name}</p>

      <div style={{ background: "#ddd", borderRadius: "8px", height: "20px", overflow: "hidden" }}>
        <div style={{ width: `${hp}%`, height: "100%", background: hp > 50 ? "green" : hp > 25 ? "orange" : "red", transition: "width 0.3s" }} />
      </div>

      <p style={{ margin: "4px 0 8px" }}>{hp} / 100</p>

      <div style={{ display: "flex", gap: "6px", justifyContent: "center" }}>
        <button onClick={() => setHp(h => Math.max(0, h - 10))}>-10</button>
        <button onClick={() => setHp(100)}>Reset</button>
      </div>
    </div>
  );
}

export default function HealthBars() {
  return (
    <div style={{ display: "flex", gap: "40px", justifyContent: "center", padding: "40px" }}>
      {fighters.map(f => <HealthBar key={f.name} fighter={f} />)}
    </div>
  );
}