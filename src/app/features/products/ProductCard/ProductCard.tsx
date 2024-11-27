import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../products-api';
import { Card, ProductImage, ProductPrice, ProductTitle } from './ProductCard.styles';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          className="object-cover rounded-t-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-500 mb-4">{product.price}</p>
      <button className="w-full py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
