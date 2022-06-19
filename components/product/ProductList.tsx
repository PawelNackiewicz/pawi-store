import { Product } from '../../types/types';
import { ProductItem } from './ProductItem';

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} item={product} />
      ))}
    </ul>
  );
};
