import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const View = () => {
  const { id } = useParams();

  const pokemon = useSelector(store => store.pokemons).filter(
    p => p.id === parseInt(id)
  )[0];

  if (!pokemon) {
    window.location.href = "/";
  }

  return (
    <>
      <main className="app-main">
        <img src={pokemon.img} alt={pokemon.name} />

        <section className="section">
          <h2>{pokemon.name}</h2>

          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </section>

        <section className="section">
          <h2>Type</h2>
          <ul>
            {pokemon.type.map(type => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>Weaknesses</h2>
          <ul>
            {pokemon.weaknesses.map(weak => (
              <li key={weak}>{weak}</li>
            ))}
          </ul>
        </section>

        {pokemon.prev_evolution && (
          <section className="section">
            <h2>Previous evolution</h2>
            <ul>
              {pokemon.prev_evolution.map(pokemon => (
                <li key={pokemon.num}>{pokemon.name}</li>
              ))}
            </ul>
          </section>
        )}

        {pokemon.next_evolution && (
          <section className="section">
            <h2>Next evolution</h2>
            <ul>
              {pokemon.next_evolution.map(pokemon => (
                <li key={pokemon.num}>{pokemon.name}</li>
              ))}
            </ul>
          </section>
        )}

        <Link to="/">Back</Link>
      </main>
    </>
  );
};

export default View;
