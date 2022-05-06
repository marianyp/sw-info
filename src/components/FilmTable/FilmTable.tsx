import { Table } from "antd"
import FilmConnection from "types/FilmConnection"
import React from "react"

export default function FilmTable({
	data,
}: {
	data: { films: FilmConnection }
}): React.ReactElement {
	const columns = [
		{
			title: "Film Title",
			dataIndex: "filmTitle",
			key: "filmTitle",
			width: "25%",
		},
		{
			title: "Planets",
			dataIndex: "planets",
			key: "planets",
			width: "37.5%",
		},
		{
			title: "Characters",
			dataIndex: "characters",
			key: "characters",
			width: "37.5%",
		},
	]

	const rows = data.films.edges.map((edge: { node: any }) => {
		const film = edge.node

		const planets = film.planets.edges.map(
			(planet: { node: { id: any; name: any } }) => ({
				planets: planet.node.name,
			}),
		)

		const characters = film.characters.edges.map(
			(character: { node: { id: any; name: any } }) => ({
				characters: character.node.name,
			}),
		)

		return {
			key: film.id,

			filmTitle: film.title,
			characters: film.characters.count,
			planets: film.planets.count,

			children: [...planets, ...characters],
		}
	})

	return (
		<Table
			columns={columns}
			dataSource={rows}
			pagination={{
				hideOnSinglePage: true,
			}}
		/>
	)
}
