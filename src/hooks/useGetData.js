import { useState, useEffect } from 'react'
import axios from 'axios'

function useGetData(url){

    const api = axios.create({baseURL:url});
    const [data, setData] = useState();


    function getDataLinked(data, api){
        const pokemonList = []
        const [pokemon, setPokemon] = useState();
        
        if(data != undefined){
            data.map((item) => {
                let apiLinked = api(item.url)

                apiLinked
                .then(response => {
                    if(response){
                        item.experience = response.data.base_experience
                        item.image = response.data.sprites.front_default

                        
                        let pokemonX = {
                            name: item.name,
                            image: response.data.sprites.front_default,
                            experience: response.data.base_experience
                        }

                        setPokemon(pokemonX)
                    }
                })
                .catch(error => console.log(error))
                
                pokemonList.push(item)
            })
        }
        
        return pokemonList
    }

    let pokemonList = getDataLinked(data, api);

    // console.log(data)

    useEffect(() => {

        api.get()
        .then(response => {
            if(response. status == 200){
                
                setData(response.data.results)
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return {pokemonList}
}

export default useGetData