import axios from 'axios';

export const getApiData = (url) => {
    const instance = axios.get(url)
    return instance;
}