import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Product } from '../../types/types';
import { ProductItem } from './ProductItem';

async function getProducts(offset: string = '0'): Promise<Product[]> {
  return await (
    await fetch(`https://naszsklep-api.vercel.app/api/products?take=25&offset=${offset}`)
  ).json();
}

export const ProductList = () => {
  const router = useRouter();
  const pageIndex = router.asPath.split('/')[3];
  const offset = pageIndex === '1' ? '0' : (25 * (Number(pageIndex) - 1)).toString();
  const { data, isLoading, error } = useQuery('products', () => getProducts(offset), {
    keepPreviousData: true,
  });

  if (isLoading) return <p>is loading...</p>;

  if (error) return <p>error...</p>;

  return (
    <ul className="grid grid-cols-3 gap-4">
      {data?.map((product) => (
        <ProductItem key={product.id} item={product} />
      ))}
    </ul>
  );
};
