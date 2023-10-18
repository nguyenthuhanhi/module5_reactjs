import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/products')
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const save = async (product) => {
    try {
        const result = await axios.post('http://localhost:8080/products', product)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
