import Movie from '../Movie/Movie'

function MovieList(props) {

    return (

        <>

            {
                props.data.length && props.data.map((data, idx) => (
                    <div key={idx} >
                        <Movie data={data} />
                    </div>
                ))
            }

            {
                !props.data.length && <div><h2>No Data to show </h2></div>
            }
        </>
    )
}

export default MovieList; 