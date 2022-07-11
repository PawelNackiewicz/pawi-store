import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { InferGetStaticPaths, Product } from '../../types/types';
import { ProductDetails } from '../../components/product/ProductDetails';

const ProductIdPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak</div>;
  }

  return <ProductDetails item={data} />;
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const data: Product[] = await (
    await fetch(`https://naszsklep-api.vercel.app/api/products`)
  ).json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const data: Product | null = await (
    await fetch(`https://naszsklep-api.vercel.app/api/products/${params?.productId}`)
  ).json();

  return {
    props: {
      data,
    },
  };
};
