import axios from 'axios';

export const getApiData = (url) => {
    const instanceAxios = axios.create({
        timeout: 3000

    });

    const instance = instanceAxios.get(url)
    return instance;
}