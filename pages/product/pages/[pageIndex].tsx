import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import { Pagination } from '../../../components/product/Pagination';
import { ProductList } from '../../../components/product/ProductList';
import { Product } from '../../../types/types';

const PageIndexPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="flex flex-col">
      <ProductList products={products} />
      <Pagination total={250} />
    </div>
  );
};

export default PageIndexPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const products: Product[] = await (await fetch('https://naszsklep.vercel.app/products')).json();
  const productPagesCount = products.length / 25;
  const paths = Array.from({ length: productPagesCount }).map((_, i) => ({
    params: { pageIndex: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<{ products: Product[] }> = async (context) => {
  const pageIndex = context?.params?.pageIndex as string;
  const offset = pageIndex === '1' ? '0' : (25 * (Number(pageIndex) - 1)).toString();
  const products = await getProducts(offset);

  return {
    props: {
      products,
    },
  };
};

async function getProducts(offset: string = '0'): Promise<Product[]> {
  return await (
    await fetch(`https://naszsklep.vercel.app/products?take=25&offset=${offset}`)
  ).json();
}
