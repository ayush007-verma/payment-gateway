
export const getProducts = async () => fetch('https://fakestoreapi.com/products', {
    method: 'GET',
    // body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
})
    