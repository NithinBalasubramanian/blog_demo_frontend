import axios from 'axios';

const Instance_API = axios.create(
    { 
        baseURL : 'https://mern-blog-xubc.onrender.com/Api/',
    }
)

export default Instance_API;