import axios from 'axios';
import configData from '../config.json';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = configData.BASE_URL;

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

export function getRequest(URL) {
    return axiosClient.get(`/${URL}`).then(response => response);
}