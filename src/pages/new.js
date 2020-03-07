import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import pokemonsAPI from "../data/pokemons.json";

const New = () => {
  const [redirect, setRedirect] = useState(false);
  const { register, handleSubmit } = useForm();
  const pokemons = useSelector(store => store.pokemons);
  const dispatch = useDispatch();

  const onSubmit = data => {
    if (data.name) {
      const pokemon = pokemonsAPI.pokemon.filter(
        pokemon => pokemon.name === data.name
      );

      if (pokemon.length > 0) {
        const equalPokemon = pokemons.find(p => p.id === pokemon[0].id);

        if (equalPokemon) {
          alert("This pokémon is already in your pokedex");
        } else {
          dispatch({ type: "NEW_POKEMON", payload: pokemon[0] });
        }

        setRedirect(true);
      } else {
        alert("Pokemon not found");
      }
    }
  };

  return (
    <>
      <main className="app-main">
        <form className="new" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" ref={register} />

          <input type="submit" value="Save" />

          <Link to="/">Cancel</Link>
        </form>
      </main>

      {redirect && <Redirect to="/" />}
    </>
  );
};

export default New;
