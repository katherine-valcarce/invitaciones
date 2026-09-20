import { Link } from "react-router-dom";

const categories = [
  { name: "Matrimonios", status: "1 invitación" },
  { name: "Cumpleaños", status: "Próximamente" },
  { name: "Baby showers", status: "Próximamente" },
  { name: "Bautizos", status: "Próximamente" },
];

export default function Home() {
  return (
    <main className="catalogue">
      <section className="catalogue__hero">
        <span className="eyebrow">Colección digital</span>
        <h1>Invitaciones</h1>
        <p>
          Un espacio para crear invitaciones bonitas, personales y listas para compartir.
        </p>
      </section>

      <section className="catalogue__grid">
        {categories.map((category, index) => (
          <article className="catalogue-card" key={category.name}>
            <span>0{index + 1}</span>
            <h2>{category.name}</h2>
            <p>{category.status}</p>
            {category.name === "Matrimonios" && (
              <Link to="/matrimonios/antonio-nicole">
                Ver Antonio &amp; Nicole
                <IconArrow />
              </Link>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
