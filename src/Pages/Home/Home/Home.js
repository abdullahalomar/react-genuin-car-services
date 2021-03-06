import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Exparts></Exparts>
        </>
    );
};

export default Home;