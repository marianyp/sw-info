import { gql, useQuery } from "@apollo/client"
import FilmConnection from "types/FilmConnection"

export const ALL_FILMS = gql`
	query AllFilms {
		films(order: [releaseDate_ASC]) {
			edges {
				node {
					id
					title
					releaseDate
					characters {
						count
						edges {
							node {
								id
								name
							}
						}
					}
					planets {
						count
						edges {
							node {
								id
								name
							}
						}
					}
				}
			}
		}
	}
`

export const useFilms = () => {
	const { loading, error, data } = useQuery<{ films: FilmConnection }>(
		ALL_FILMS,
	)

	return {
		error,
		loading,
		data,
	}
}
