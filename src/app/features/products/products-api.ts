export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export const fetchProducts = async () => ([
    {
        id: 1,
        name: 'Product 1',
        description: 'This is a great product.',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'This is another great product.',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
])
