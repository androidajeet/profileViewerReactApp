import axios from 'axios';

export const getProfileData = (url) => {
    const instance = axios.get(url)
    return instance;

}