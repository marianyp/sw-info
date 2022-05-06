import "./AppLayout.css"
import React from "react"

export default function AppLayout(props: {
	children: React.ReactNode
}): React.ReactElement {
	const { children } = props
	return <div className="App">{children}</div>
}
