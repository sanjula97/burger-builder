import axios from 'axios'

const instance = axios.create({
    baseURL:'https://my-burger-3627c.firebaseio.com/'
});

export default instance;