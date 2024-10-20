import axios from "axios";

const API_URL = 'http://localhost:8080';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch(error) {
        console.error('Error fetching posts:', error);
    }
};