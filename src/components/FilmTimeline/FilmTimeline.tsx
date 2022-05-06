import { Collapse, Timeline } from "antd"
import CollapsePanel from "antd/lib/collapse/CollapsePanel"
import FilmConnection from "types/FilmConnection"
import React from "react"

export default function FilmTimeline({
	data,
}: {
	data: { films: FilmConnection }
}): React.ReactElement {
	const films = [...data.films.edges]
		.sort(
			(filmA, filmB) =>
				+new Date(filmA.node.releaseDate) -
				+new Date(filmB.node.releaseDate),
		)
		.map((film) => (
			<Timeline.Item>
				{`${new Date(film.node.releaseDate).toLocaleDateString()} | ${
					film.node.title
				}`}
			</Timeline.Item>
		))
	return (
		<Collapse>
			<CollapsePanel header="Film Timeline" key="1">
				<Timeline>{films}</Timeline>
			</CollapsePanel>
		</Collapse>
	)
}
