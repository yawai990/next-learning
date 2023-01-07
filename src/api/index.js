import axios from "axios";

const API = axios.create({
    baseURL: 'https://aligate.teehtwin.org/api'
  });

API.defaults.headers.common['Authorization'] = 'Bearer 49|b85H4vNZacummlNtsDRClcHX3kvz0y7ruUDvL8FH';


export const GenerateQR = qrData => API.post('/generate',qrData);