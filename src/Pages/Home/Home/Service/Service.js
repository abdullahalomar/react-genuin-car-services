import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, img, description, price } = props.service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
          navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>Name: {name}</h2>
            <h5>Price: ${price}</h5>
            <p>{description}</p>
            <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-primary'>Book: { name}</button>
        </div>
    );
};

export default Service;