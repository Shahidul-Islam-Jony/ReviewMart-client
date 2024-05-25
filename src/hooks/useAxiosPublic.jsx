
import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
})


// http://localhost:5000
// https://review-mart-server.vercel.app

const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;