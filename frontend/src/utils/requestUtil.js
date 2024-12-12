import axios from 'axios';

export const GET = async (url) => {
    const requestOptions = {
        headers: {
            "Content-Type": "application/json",
        }
    };
    const response = await axios.get(url, requestOptions)
    .then((res) => res.data)
    .catch((error) => {
        console.error('Error:', error);
    });
    return response;
};

export const POST = async (url, data) => {
    const requestOptions = {
        headers: {
            "Content-Type": "application/json",
        }
    };
    const response = await axios.post(url, data, requestOptions)
    .then((res) => res.data)
    .catch((error) => {
        console.error('Error:', error);
    });
    return response;
};