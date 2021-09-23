import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID c7bvHmSiiuqiatPt2hresYLGjaFwOOFHrRKwqW0caqk'
      }
})