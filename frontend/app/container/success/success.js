import React from 'react';
import StarIconGray from '../../assets/images/StarIcon-gray.png';

const Success = () => {
    return (
        <div className="container-fluid success"> 

            <div className="question-wrapper" >            
                <div className="thanks">THANK YOU!</div>

                <div className="feedback">
                Your feedback has been send, <br /> Have a lovely day
                </div>
            </div>
            
        </div> 
    );
};
  
export default Success;