import { IProduct } from "../models"
import {useState} from 'react';

interface ProductProps {
    product: IProduct
}

export const Product = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false)

    return (
        <div className='border rounded items-center text-center mb-2 flex flex-col py-2'>
            <img src={product.image} alt={product.title} className='w-1/3' />
            <div>
                <p>{product.title}</p>
                <p className='font-bold text-lg'>{product.price}</p>
                <button onClick={()=>setDetails(prev => !prev)}
                    className={details ? 'bg-blue-400 py-1 px-3 border' :'bg-yellow-400 py-1 px-3 border'}>
                    {details ? 'Hide details' : 'Show details'}
                </button>
                { details && <div>
                    <p className='text-sm'>{product.description}</p>
                </div> }
            </div>
        </div>
    )
}
