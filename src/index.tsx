import "./index.css"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import App from "./components/App/App"
import config from "./config"
import React from "react"
import ReactDOM from "react-dom/client"

const client = new ApolloClient({
	uri: config.parseApiUri,
	cache: new InMemoryCache(),
	headers: {
		"X-Parse-Application-Id": config.parseApplicationId,
		"X-Parse-Client-Key": config.parseClientKey,
	},
})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
)
