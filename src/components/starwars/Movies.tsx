interface MoviesProps {
    movies: any[]
    back: () => void
}

export default function Movies(props: MoviesProps){

    return (
        <div className="flex flex-col gap-5 items-center w-full">
            <button onClick={props.back} className="button">Back</button>
            <table className="w-3/5 text-xl opacity-80 rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-zinc-700">
                        <th className="p-2 font-black">Title</th>
                        <th className="p-2 font-black">Weight</th>
                        <th className="p-2 font-black">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.movies.map((movie: any, indice: number) => (
                        <tr key={movie.name}
                            className={`
                            ${indice % 2 === 0 ? 'bg-zinc-500' : 'bg-zinc-600'}
                            `}
                        >
                            <td className="text-center" style={{fontSize: "1.125rem"}}>{movie.title}</td>
                            <td className="text-center" style={{fontSize: "1.125rem"}}>{movie.episode_id}</td>
                            <td className="text-center" style={{fontSize: "1.125rem"}}>
                                {new Date(movie.release_date).toLocaleDateString('pt-BR')}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}