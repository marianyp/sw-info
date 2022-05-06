import "./App.css"
import { Button } from "antd"
import { useFilms } from "hooks/useFilms"
import { useState } from "react"
import AppLayout from "components/AppLayout/AppLayout"
import FilmInfoLayout from "components/FilmInfoLayout/FilmInfoLayout"
import FilmTable from "../FilmTable/FilmTable"
import FilmTimeline from "components/FilmTimeline/FilmTimeline"
import Loader from "components/Loader/Loader"

function App(): React.ReactElement {
	const [ready, setReady] = useState(false)
	const { loading, data } = useFilms()

	if (loading || !data)
		return (
			<AppLayout>
				<Loader />
			</AppLayout>
		)

	return (
		<AppLayout>
			{!ready ? (
				<Button type="primary" onClick={() => setReady(true)}>
					Ready?
				</Button>
			) : (
				<FilmInfoLayout>
					<FilmTable data={data} />
					<FilmTimeline data={data} />
				</FilmInfoLayout>
			)}
		</AppLayout>
	)
}

export default App
