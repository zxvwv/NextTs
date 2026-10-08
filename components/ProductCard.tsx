import { Product } from '../data/products';
import Image  from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card flex flex-col gap-4 p-4 border border-gray-200 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <Image
        src={product.image}
        alt={product.title}
        width={250}
        height={150}
        className="product-image w-full h-48 object-cover rounded-xl"
      />
      <h4 className="product-title text-xl font-bold text-gray-900 truncate line-clamp-2">
        {product.title}
      </h4>
      <p className="product-description text-lg text-gray-600 line-clamp-3">
        {product.description}
      </p>
      <span className="product-price text-2xl font-bold text-gray-900">
        {product.price.toLocaleString('ru-RU')} ₽
      </span>
      <button className="product-btn w-full py-3 px-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200">
        В корзину
      </button>
    </div>
  );
};


export default ProductCard;
