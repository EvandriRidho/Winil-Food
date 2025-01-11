import React from 'react'
import './DetailChooseUs.css'
const DetailChooseUs = ({ icon: Icon, title, description }) => {
    return (
        <div className='detail-choose-us'>
            <div className='detail-choose-us-icons'>
                <Icon className="icon" />
            </div>
            <div className='detail-choose-us-text'>
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    )
}

export default DetailChooseUs