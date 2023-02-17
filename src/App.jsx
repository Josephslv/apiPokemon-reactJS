import { useEffect } from 'react';
import { useState } from 'react';

/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/

//hooks
import useGetData from './hooks/useGetData';

function App() {
  let urlApi = 'https://pokeapi.co/api/v2/pokemon'
  let {pokemonList:data} = useGetData(urlApi)


  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>consumir api pokémon</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Experiencia</th>
            <th>Img</th>
          </tr>
        </thead>
        <tbody>
         {
          
          data != undefined &&
          data.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.experience}</td>
              <td>
                <img src={p.image} alt={p.name} />
              </td>
            </tr>
          ))
          
         }
        </tbody>
      </table>
    </>
  );
}

export default App;
