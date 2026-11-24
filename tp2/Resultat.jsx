import "./Resultat.css";

function Resultat() {
  const moyenne = 14;

  return (
    <div className={moyenne >= 10 ? "admis" : "refuse"}>
      <h2>{moyenne >= 10 ? "Admis" : "Refusé"}</h2>
      <p>Moyenne : {moyenne}</p>
    </div>
  );
}

export default Resultat;