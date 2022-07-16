import React from 'react';
import Image from 'next/image';
import { Product } from '../../types/types';
import { NextSeo } from 'next-seo';

interface ProductDetailsProps {
  item: Product;
}

export const ProductDetails = ({ item }: ProductDetailsProps) => {
  return (
    <div>
      <NextSeo
        title={item.title}
        description={item.description}
        canonical={`https://pawi-store.vercel.app/${item.id}`}
        openGraph={{
          url: `https://pawi-store.vercel.app/${item.id}`,
          title: item.title,
          description: item.description,
          images: [
            {
              url: item.image,
              alt: item.title,
              type: 'image/jpeg',
            },
          ],
          site_name: 'Pawi Store',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className="bg-white flex items-center justify-center">
        <Image alt={item.image} src={item.image} width="200" height="300" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
};
