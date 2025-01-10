import React, { useEffect } from 'react'
import './ListItem.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const ListItem = ({ url }) => {

    const [list, setList] = useState([])
    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`)
        if (response.data.success) {
            setList(response.data.data)
        } else {
            toast.error("error")
        }
    }

    // API CALL
    const removeFood = async (foodId) => {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
        await fetchList()
        if (response.data.success) {
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
    }

    useEffect(() => {
        fetchList()
    }, [])
    return (
        <div className='list add flex-col'>
            <p className='title'>All Foods List</p>
            <div className='list-table'>
                <div className='list-table-format title'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) => {
                    return (
                        <div key={index} className='list-table-format'>
                            <img src={`${url}/images/` + item.image} alt='img' />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p className='cursor'
                                onClick={() => removeFood(item._id)}
                            >X</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListItem