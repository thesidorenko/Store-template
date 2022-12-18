import { CreateProduct } from './components/CreateProduct';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { useState } from 'react';
import { IProduct } from './models';

function App() {
  const { products, addProduct } = useProducts();
  const [modal, setModal] = useState(false);

  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }

  return (
    <div className='container my-5 mx-auto grid grid-cols-3 gap-5'>
      {
        products.map(product => <Product product={product} key={product.id} />)
      }
      { modal && <Modal onClose={() => setModal(false)} title='Create new product'>
          <CreateProduct onCreate={createHandler}/>
        </Modal>
      }
      <button
        onClick={() => setModal(true)}
        className='text-2xl text-white bg-green-800 px-4 py-2 right-7 bottom-7 rounded-full fixed'>+
      </button>
    </div>
  )
}

export default App;
