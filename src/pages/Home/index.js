import { Container,MovieList,Movie } from "./style"
import { useState,useEffect } from "react"

function Home(){
{/*Hooks - useState:Controla do estado de uma variavél dentro da aplicação.
Sintaxe:Retorna duas coisas:1º uma variavél que armazena o estado inicial(no caso:movies) e 2º uma 
variavél que atualiza o estado sempre iniciada com Set(no caso:Setmovies)*/}

const [movies, setMovies] = useState([])
const image_path = 'https://image.tmdb.org/t/p/w500'

{/*Hooks - useEffect:Controla os efeitos colaterais da aplicação.
Sintaxe:1º a função que vai receber todo o código e 2º um array de dependências[]*/}

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c3a634311d50f3ebc68af96cda322212&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => setMovies(data.results)) 
    },[])
    {/*Obs:O results é uma propriedade da própria api*/}
   return (
    <Container>

    <h1>Movies</h1>

    <MovieList>
        {/*
        *Foi chamado o método map(percorrer o array e retorna alguma coisa, ou seja cria algo)
        *Sintaxe:movies=Nome do array(const movies)/.map(chamando o método map)/movie=Nome alea
        tório que você escolhe, porém ele que vai(percorrer) chamar o array.
        *Nessa situação se utiliza o map porque (retorna algo)já o foreach(não retorna nada)
       */}

        {movies.map(movie =>{
            return (
            <Movie key={movie.id}>
            <a href="">
            <img src={`${image_path}${movie.poster_path}`}/>
            </a>
            <span>{movie.title}</span>
            </Movie>
            )
        })}
       

    </MovieList>

    </Container>
 )
}

export default Home