const axios = require('axios');

const handler = async (event) => {
    const { lat, lon } = event.queryStringParameters;

    const API_SECRET = process.env.API_SECRET;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${API_SECRET}`;

    try {
        const { data } = await axios.get(url);
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        const { status, statusText, headers, data } = error.response;
        return {
            statusCode: status,
            body: JSON.stringify(status, statusText, headers, data),
        };
    }
};

module.exports = { handler };
