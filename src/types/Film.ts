type CharacterConnection = import("./CharacterConnection").default
type PlanetConnection = import("./PlanetConnection").default

type Film = {
	characters: CharacterConnection[]
	id: string
	planets: PlanetConnection[]
	releaseDate: string
	title: string
}

export default Film
