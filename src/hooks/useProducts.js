import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-waters-91347.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.result));
    }, []);
    return [products, setProducts];
}

export default useProducts;