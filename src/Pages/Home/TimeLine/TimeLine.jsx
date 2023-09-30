import React from 'react'
import './TimeLine.css'
import { Title } from '../../../Components/Title/Title'
import { FaCertificate, FaCog, FaGift, FaHome, FaRunning, FaUser } from 'react-icons/fa';

export const TimeLine = () => {
  
  return (
    <div className='my-10'>
      <Title children={'This our Time-Line'} />
      <div className="timeline">
        <div className="container left">
          <div className="date">15 dec</div>
          <FaHome className='icon'></FaHome>
          <div className="content">
            <h2>Bella Italia</h2>
            <p>
            Bella Italia offers an authentic taste of Italy with a wide range of pasta dishes, wood-fired pizzas, and delectable desserts.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="date">22 Oct</div>
          <FaGift className='icon'></FaGift>
          <div className="content">
            <h2>Mama Mia Pizzeria</h2>
            <p>
            Mama Mia Pizzeria is a family-friendly pizza place known for its mouthwatering, hand-tossed pizzas and warm atmosphere.
            </p>
          </div>
        </div>
        <div className="container left">
          <div className="date">10 Jul</div>
          <FaUser className='icon'></FaUser>
          <div className="content">
            <h2>The Steakhouse Grill</h2>
            <p>
            The Steakhouse Grill is a top-notch restaurant specializing in premium cuts of steak, cooked to perfection, and served with gourmet sides.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="date">18 May</div>
          <FaRunning className='icon'></FaRunning>
          <div className="content">
            <h2>La Petite Boulangerie</h2>
            <p>
            La Petite Boulangerie is a charming bakery known for its artisanal bread, pastries, and aromatic coffee.
            </p>
          </div>
        </div>
        <div className="container left">
          <div className="date">10 Feb</div>
          <FaCog className='icon'></FaCog>
          <div className="content">
            <h2>Sushi Sensation</h2>
            <p>
            Sushi Sensation offers a delightful culinary journey through Japanese cuisine, featuring the freshest sushi and sashimi.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="date">01 Jan</div>
          <FaCertificate className='icon'></FaCertificate>
          <div className="content">
            <h2>Spice of India</h2>
            <p>
            Spice of India is your go-to destination for flavorful Indian dishes, including curries, biryanis, and tandoori specialties.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
