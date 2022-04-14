import React from 'react';
import expart1 from '../../../img/experts/expert-1.jpg';
import expart2 from '../../../img/experts/expert-2.jpg';
import expart3 from '../../../img/experts/expert-3.jpg';
import expart4 from '../../../img/experts/expert-4.jpg';
import expart5 from '../../../img/experts/expert-5.jpg';
import expart6 from '../../../img/experts/expert-6.png';
import Expart from '../../../Pages/Home/Expart/Expart';

const exparts = [
    {id: 1, name: 'Will Smith', img: expart1},
    {id: 2, name: 'Chris Rock', img: expart2},
    {id: 3, name: 'Dwayne Rock', img: expart3},
    {id: 4, name: 'Messy Vai', img: expart4},
    {id: 5, name: 'Ronaldo Bro', img: expart5},
    {id: 6, name: 'Ronaldo Bro', img: expart6},
]
const Exparts = () => {
    return (
        <div id='exparts' className='container'>
            <h2 className='text-primary text-center mt-5'>Our Exparts</h2>
            <div className='row'>
                {
                    exparts.map(expart => <Expart
                        key={expart.id}
                        expart = {expart}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;