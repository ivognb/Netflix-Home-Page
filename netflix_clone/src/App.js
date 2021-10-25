import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default () =>{

  const [movieList, setMovieList] = useState ([]);

  const [featuredData, setFeaturedData] = useState(null)

  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {

  const loadAll = async () => {
    //pegando todas as listas dos filmes
    let list = await Tmdb.getHomeList();
    setMovieList(list);

    //pegando o featured
    let originals = list.filter(i=>i.slug === 'originals');
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
    let chosen = originals[0].items.results[randomChosen];
    let choseInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(choseInfo);
  }

  loadAll();
}, []);

  useEffect (() =>{
    const scrollListener = () => {
      if (window.scrollY > 50){
        setBlackHeader (true)
      } else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }

  }, [])

  return (
  <div className="pagina">

    <Header black={blackHeader}/>

    {featuredData &&
      <FeaturedMovie item={featuredData}/>
      }

        <section className="lists">
          {movieList.map((item, key)=>(
            <MovieRow key={key} title={item.title} items={item.items} />                      
          ))}
        </section>
      
      <footer>
        Criado por Ivo Gabriel baseado na videoaula do professor <a href="https://www.youtube.com/channel/UCw9mYSlqKRXI6l4vH-tAYpQ">Bonieky Lacerda</a><br/>
        Todos os direitos pertencem a Netflix<br/>
        Base de dados usadas do site Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"></img>
      </div>
      }
  </div>
  );
}


