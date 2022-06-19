import React from 'react';
import { Page } from '../../../components/Page';
import { Pagination } from '../../../components/product/Pagination';
import { ProductList } from '../../../components/product/ProductList';

const PageIndexPage = () => {
  return (
    <Page>
      <div className="flex flex-col">
        <ProductList />
        <Pagination total={250} />
      </div>
    </Page>
  );
};

export default PageIndexPage;
