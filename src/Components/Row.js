import React, { useState, useEffect } from 'react';
import { requests } from '../Services/requests'
import './style.css'
import YouTube from 'react-youtube'
const Row = ({ title, fetchUrl, isLarge }) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        requests.getRequest(fetchUrl).then(response => {
            setMovies(response["results"]);
        }).catch(e => {
            console.log('error row');
        })
    }, [fetchUrl])
    console.log(movies)
    const base_url = "https://image.tmdb.org/t/p/original/"
    return (
        <div className="row">
            <h1>
                {title}
            </h1>
            <div className="row_posters">
                {movies && movies.map(element => {
                    return (
                        element.backdrop_path && <img
                            className={`row_poster ${isLarge && "row_poster_Large"}`}
                            src={`${base_url}${isLarge ? element.poster_path : element.backdrop_path}`}
                            alt={element.name} key={element.id}
                        />
                    )
                })}

            </div>

        </div>

    )
}
export default Row;