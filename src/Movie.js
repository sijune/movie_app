import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}){
    // genres는 배열이다.
    return(
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres"> 
                    {/* 더 작은 컴포넌트로 쪼개겠다. */}
                    {genres.map((genre, index) => <MovieGenres genre={genre} key={index}/>)} 
                    {/* 배열이 가진 모든 요소들을 뽑겠다. */}
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
          
        </div>
    )
}

function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt="alt" title={alt}/>
    )
}

function MovieGenres({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: propTypes.string.isRequired
}


MovieGenres.propTypes = {
    genre: propTypes.string.isRequired
}

export default Movie //app.js로 해당 컴포넌트를 내보낸다.