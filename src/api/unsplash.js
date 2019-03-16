import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 899826325a378ec603eddd10cb2c4a39c28711fff50bb30979638c955b25a8f0'
    }
})

