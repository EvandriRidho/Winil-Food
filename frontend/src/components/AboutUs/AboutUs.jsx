import React from 'react';
import Card from '../Card/Card';
import { IoIosRocket } from "react-icons/io";
import { FaMedal } from 'react-icons/fa';
import { IoPhonePortrait, IoCashOutline } from "react-icons/io5";
import './AboutUs.css';
import ChooseUs from '../ChooseUs/ChooseUs';

const AboutUs = () => {
    const cards = [
        {
            icon: IoIosRocket,
            title: "Fast Delivery",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula metus sit amet justo euismod.",
        },
        {
            icon: FaMedal,
            title: "Quality Food",
            description: "Praesent vel ligula ac elit mollis luctus. Morbi pharetra nisi vitae erat bibendum, at fermentum libero.",
        },
        {
            icon: IoPhonePortrait,
            title: "Check Out",
            description: "Aliquam sollicitudin neque vitae felis euismod, id iaculis turpis dapibus. Etiam fermentum nunc euismod libero.",
        },
        {
            icon: IoCashOutline,
            title: "Cash On Delivery",
            description: "Vestibulum aliquam libero non sem venenatis, eget viverra lorem consequat. Sed auctor purus non bibendum imperdiet.",
        },
    ];

    return (
        <div id="About-Us" className="about-us">
            <h2>About Us</h2>
            <div className="cards-container">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
            <div>
                <ChooseUs />
            </div>
        </div>
    );
};

export default AboutUs;
