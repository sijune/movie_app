import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {

  state = {
  }

  componentDidMount(){
   this._getMovies()
  }

  _getMovies = async() => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
      .then(potato => potato.json()) //console찍어보자
      .then(json => json.data.movies) //console찍어보자
      .catch(err => console.log(err))
  }

_renderMovies = () => {
  const movies = this.state.movies.map((movie) => {
    console.log(movie) 
    //로그찍어서 변수 찾기
    return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}
    /> //key값을 id값으로 부여
  })
  return movies
}

  render() {
        return (
          <div className="App">
            {this.state.movies ? this._renderMovies() : "Loading"}
          </div>
        );
      }
}
export default App;
