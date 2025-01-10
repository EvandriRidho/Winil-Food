import React, { useState } from 'react'
import "./Add.css"
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddItem = ({ url }) => {

    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Salad'
    })

    // Mengecek Perubahan
    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    // API CALL
    const handleOnSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('price', Number(data.price))
        formData.append('category', data.category)
        formData.append('image', image)

        try {
            const response = await axios.post(`${url}/api/food/add`, formData)
            if (response.data.success) {
                setData({
                    name: '',
                    description: '',
                    price: '',
                    category: 'Salad'
                })
                setImage(false)
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("An error occurred while adding the item.")
            console.error("Error:", error.response || error.message || error)
        }
    }


    return (
        <div className='add'>
            <form className='flex-col' onSubmit={handleOnSubmit}>
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
                        <p>Category</p>
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