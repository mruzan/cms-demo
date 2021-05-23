import React from 'react';
import { history } from '../../store';
import VeryUnhappy from '../../assets/images/VeryUnhappy.png';
import Unhappy from '../../assets/images/Unhappy.png';
import Neutral from '../../assets/images/Neutral.png';
import Happy from '../../assets/images/Happy.png';
import VeryHappy from '../../assets/images/VeryHappy.png';
import homeBanner from '../../assets/images/home-banner.png';

const Home = () => {  
       
    return (
       <div className="container-fluid home">
        <div class="flex-container">
            <div className="logo-wrapper">
                <img src={homeBanner} alt="homeBanner" />
            </div>
            <div className="flex-wrapper">
                <div className="company-title">
                    <strong>DEMO INC.</strong> would like to know:
                </div>
                <div className="title">
                    How is your week going?
                </div>
                <div className="smiley-wrapper">
                    <a class="flex-item">
                        <img src={VeryUnhappy} className="logo" alt="VeryUnhappy" onClick={() => history.push('/demo-question/1')}/>
                    </a>
                    <a class="flex-item">
                        <img src={Unhappy} className="logo" alt="Unhappy" onClick={() => history.push('/demo-question/2')}/>
                    </a>
                    <a class="flex-item">
                        <img src={Neutral} className="logo" alt="Neutral" onClick={() => history.push('/demo-question/3')}/>
                    </a>
                    <a class="flex-item" >
                        <img src={Happy} className="logo" alt="Happy" onClick={() => history.push('/demo-question/4')}/>
                    </a>
                    <a class="flex-item">
                        <img src={VeryHappy} className="logo" alt="VeryHappy" onClick={() => history.push('/demo-question/5')}/>
                    </a>
                </div>
                <div className="response">
                    Your answer will always remain anonymous
                </div>
            </div>
            <div className="footer">
                <span className="name">Butterfly. Your Team's Happiness Manager.</span>
                <span className="address">Appynest, Inc. - 604 East Eleven Street, NY 10009</span>
                <span className="copy">©2021 Appynest, Inc. All rights reserved.</span>
            </div>            
        </div>
       </div>
    );
};
  
export default Home;