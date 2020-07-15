import React, { useEffect } from 'react';
import useProducts from '../../state/product/hooks/useProducts';

import Spinner from '../../components/spinner';
import List from './components/list';
import Card from './components/card';
import Button from '../../components/button';

const Home = () => {
  const [product, isLoading, setListProducts] = useProducts();

  useEffect(() => {
    if (!product.list || product.list.length === 0) {
      setListProducts();
    }
  }, [product, setListProducts]);

  return (
    <div>
      <Spinner show={isLoading} />
      <Button primary large onClick={setListProducts} type="submit">
        Refresh
      </Button>
      <List>
        {product?.list?.map(p => (
          <Card key={p.id}>
            <h1>{p.name}</h1>
            <img src={p.avatar} alt="simple avatar" />
            <span>Created at: {p.createdAt}</span>
          </Card>
        ))}
      </List>
    </div>
  );
};

export default Home;
