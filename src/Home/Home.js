import './Home.css';
import MovieList from '../MovieList/MovieList'
import { useState, useEffect } from 'react';
import axios from 'axios';



function Home() {
    const [data, setMoviseData] = useState([]);



    const getTrending = async () => {



        return await axios.get(`api.themoviedb.org/3/movie/550?api_key${process.env}`)
            
        .then(result => { return result.data;

            }).catch((err) => { console.log(err);
            })
    }

    useEffect(() => {
        void (async () => {



            let data = await getTrending();




            setMoviseData(data);
        })();
    }, []);

    return (

        <MovieList data={data} />


    )
}

export default Home;