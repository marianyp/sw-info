import "./FilmInfoLayout.css"
import React from "react"

export default function TableLayout(props: {
	children: React.ReactNode
}): React.ReactElement {
	const { children } = props
	return <div className="film-info-layout">{children}</div>
}
