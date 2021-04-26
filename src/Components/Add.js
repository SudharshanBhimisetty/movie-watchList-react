import React,{useState} from 'react'
import ResultCard from './ResultCard'

const Add = () => {


    const [query, setQuery] = useState("");
    const [results, setResults] = useState([])

    const handleChange = (e) => {
        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setResults(data.results)
            })
             .catch((error) => {
                  setResults([])
                  console.error('Error:', error);
              }); 
    }


    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" 
                        placeholder="Search for a movie"
                        value ={query}
                        onChange={handleChange}>    
                        </input>
                    </div>

                    { results && results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => {
                                return (
                                    <ResultCard movie={movie} key={movie.id}/>
                                )
                            })}
                        </ul>
                    )} 

                </div>
            </div>
        </div>
    )
}

export default Add
