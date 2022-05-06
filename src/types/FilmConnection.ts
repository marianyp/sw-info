type FilmEdge = import("./FilmEdge").default

type FilmConnection = {
	edges: FilmEdge[]
	count: number
}

export default FilmConnection
