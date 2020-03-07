import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Delete } from "../assets/delete.svg";

const Home = () => {
  const pokemons = useSelector(store => store.pokemons);
  const dispatch = useDispatch();

  const handleDeletePokemon = (e, name) => {
    e.preventDefault();

    const value = window.confirm("Are you sure?");

    if (value) {
      dispatch({ type: "DELETE_POKEMON", payload: name });
    }
  };

  return (
    <>
      <header className="app-header">
        There are {pokemons.length} Pokemons in your pokedex
      </header>

      <main className="app-main">
        {pokemons.map(pokemon => (
          <Link to={"/view/" + pokemon.id} key={pokemon.id}>
            <article className="card">
              <Delete onClick={e => handleDeletePokemon(e, pokemon.name)} />

              <img src={pokemon.img} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </article>
          </Link>
        ))}

        <Link to="/new">
          <article className="cardNew">
            <span>+</span>
            <p>Add new</p>
          </article>
        </Link>
      </main>
    </>
  );
};

export default Home;
