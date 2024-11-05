import React, { useEffect, useState } from 'react'
import './AddItem.css'
import { assets } from '../../assets/assets'

const AddItem = () => {

    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Salad'
    })

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    useEffect(() => {

    }, [data])

    return (
        <div className='add'>
            <form className='flex-col'>
                <div className='add-img-upload flex-col'>
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='upload-img' />
                    </label>
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type='file' id='image' hidden required
                    />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product Name</p>
                    <input
                        onChange={handleOnChange}
                        value={data.name}
                        type='text' name='name' placeholder='Type Here' />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Product Description</p>
                    <textarea
                        onChange={handleOnChange}
                        value={data.description}
                        name='description' placeholder='Write Content Here' rows={6} required />
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product Category</p>
                        <select onChange={handleOnChange} value={data.category} name='category' required>
                            <option value='Salad'>Salad</option>
                            <option value='Rolls'>Rolls</option>
                            <option value='Deserts'>Deserts</option>
                            <option value='Sandwitch'>Sandwitch</option>
                            <option value='Cake'>Cake</option>
                            <option value='Pure Veg'>Pure Veg</option>
                            <option value='Pasta'>Pasta</option>
                            <option value='Noodles'>Noodles</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input onChange={handleOnChange} value={data.price} type='number' name='price' placeholder='$20' required />
                    </div>
                </div>
                <button type='submit' className='button'>Add Item</button>
            </form>
        </div>
    )
}

export default AddItem