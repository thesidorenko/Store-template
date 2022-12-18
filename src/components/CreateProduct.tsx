import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";

const productData: IProduct =  {
    title: '',
    price: 13.5,
    description: '',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 5,
        count: 73
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({ onCreate }: CreateProductProps) {

    const [value, setValue] = useState('');
    const [errorTitle, setErrorTitle] = useState('');

    const [valueTextarea, setValueTextarea] = useState('')
    const [errorDescription, setErrorDescription] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setErrorTitle('')
        setErrorDescription('')

        if (value.trim().length === 0) {
            setErrorTitle('Enter valid title.')
            return
        }

        if (valueTextarea.trim().length === 0) {
            setErrorDescription('Enter valid description')
            return
        }

        productData.title = value
        productData.description = valueTextarea

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const changeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValueTextarea(event.target.value)
    }

    return (
        <div className='text-left'>
            <form onSubmit={submitHandler}>
                <label className="text-right">Title
                    <input
                        type='text'
                        placeholder='Enter title'
                        className='border p-1 my-2 w-full text-sm'
                        value={value}
                        onChange={changeInput}
                        />
                </label>
                {errorTitle && <p className='text-sm text-center text-red-500'>{errorTitle}</p>}
                <label>Description
                    <textarea
                        className='w-full border p-1 my-2 resize-none text-sm h-24'
                        placeholder='Enter description product'
                        onChange={changeDescription}
                        />
                </label>
                {errorDescription && <p className='text-sm text-center text-red-500'>{errorDescription}</p>}
                <button type='submit' className='bg-yellow-400 px-5 py-1 border'>Add</button>
            </form>
        </div>
    )
}