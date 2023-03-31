const proxyUrl = "https://cors-anywhere.herokuapp.com/";

const api = {
    baseApiEndPoint: `${proxyUrl}https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&language=en`
}

export default api;
