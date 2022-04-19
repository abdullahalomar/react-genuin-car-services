import React from 'react';
import sleeping from '../../../img/sleeping.jpg'
import PageTitle from '../PageTitle/PageTitle';
const NotFound = () => {
    return (
        <div>
            <PageTitle title='NotFound'></PageTitle>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;