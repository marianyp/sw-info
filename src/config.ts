const config = {
	parseApiUri: process.env.REACT_APP_PARSE_API_URI ?? "",
	parseApplicationId: process.env.REACT_APP_PARSE_APPLICATION_ID ?? "",
	parseMasterKey: process.env.REACT_APP_PARSE_MASTER_KEY ?? "",
	parseClientKey: process.env.REACT_APP_PARSE_CLIENT_KEY ?? "",
}

export default config
