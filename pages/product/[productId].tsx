import React from 'react';
import { useRouter } from 'next/router';
import { Page } from '../../components/Page';

const ProductIdPage = () => {
  const router = useRouter();

  return (
    <Page>
      <h1>Siema {router.query.productId}</h1>
    </Page>
  );
};

export default ProductIdPage;
