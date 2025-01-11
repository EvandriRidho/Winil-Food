import React from 'react'
import './ChooseUs.css'
import DetailChooseUs from '../DetailChooseUs/DetailChooseUs'
import { CiDeliveryTruck } from "react-icons/ci";
import { LuSquareMenu } from "react-icons/lu";
import { MdFoodBank } from "react-icons/md";

const ChooseUs = () => {
    const DetailChooseUss = [
        {
            icon: CiDeliveryTruck,
            title: "Convenient and Reliable",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula metus sit amet justo euismod.",
        },
        {
            icon: LuSquareMenu,
            title: "Variety of Options",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula metus sit amet justo euismod.",
        },
        {
            icon: MdFoodBank,
            title: "Eat Food",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula metus sit amet justo euismod.",
        },
    ];

    return (
        <div className='choose-us'>
            <div className='choose-us-image'>
                <img src="/salad-choose.jpeg" alt='Salad' />
            </div>
            <div className='choose-us-text'>
                <h2>Why Choose Us?</h2>
                <div className='choose-us-cards'>
                    {DetailChooseUss.map((card, index) => (
                        <DetailChooseUs
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ChooseUs