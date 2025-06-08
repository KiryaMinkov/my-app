import { Movie } from './Movie';
import err from './error.PNG'

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID}{...movie} /> )
            ) : (
                <div className='asas'>
                <div className="errorpic">
                <h4>Not found :(</h4>
                </div>
                <div className="errorpic">
                <img style={{width: 300, height: 300, margin: 50}} src={err} alt="Ошибка" />

                </div>
                </div>
            )}
    </div>
    );
}

export { Movies };
