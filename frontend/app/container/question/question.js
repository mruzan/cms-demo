import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import Rating from 'react-rating';
import { history } from '../../store';
import VeryUnhappy from '../../assets/images/VeryUnhappy.png';
import Unhappy from '../../assets/images/Unhappy.png';
import Neutral from '../../assets/images/Neutral.png';
import Happy from '../../assets/images/Happy.png';
import VeryHappy from '../../assets/images/VeryHappy.png';
import StarIcon from '../../assets/images/StarIcon.png';
import StarIconGray from '../../assets/images/StarIcon-gray.png';
import { getQuestions } from './actions';
import {
    selectGetQuestions,
    selectGetQuestionsSuccess,
    selectGetQuestionsFailed,
} from './selectors';

const Question = ({
  getQuestionFunc,
  getSelectQuestions,
  getSelectQuestionsSuccess,
  match: {params: { id }}
}) => {  
  const [mood, setMood] = useState({});
  const [questions, setQuestions] = useState([]);
  const [smiley, setSmiley] = useState();
  const [rating, setRating] = useState({});
  const [selectedSize, setSelectedSize] = useState({});

    useEffect(() => {
        getQuestionFunc(id);      
    }, [])

    useEffect(() => {      
      if (getSelectQuestions && Object.keys(getSelectQuestions).length > 0) {
        const { mood, questions } = getSelectQuestions;       
        const { mood_id: moodId } = mood;

        switch(moodId) {
          case '1' :
            setSmiley(VeryUnhappy);
            break;
          case '2':
            setSmiley(Unhappy);
            break;
          case '3':
            setSmiley(Neutral);
            break;
          case '4':
            setSmiley(Happy);
            break;
          case '5':
            setSmiley(VeryHappy);
            break;
          default:
            setSmiley(VeryUnhappy);
        }

        setMood(mood);
        setQuestions(questions);
        
      }
  }, [getSelectQuestions, getSelectQuestionsSuccess])

  const handleRating = useCallback((rate, e) => {
    const newRating = { ...rating}; 
    newRating[e] = rate;   

    setRating(newRating);
    setSelectedSize(Object.keys(newRating).length);
  },[rating]);

  let rows;
  if (getSelectQuestions && Object.keys(getSelectQuestions).length > 0) {
    
    rows = questions.map((value, key) => {
      const { question, category, _id: id } = value;    
      const initialValue = rating[id] || 0;

      return (
        <div className="question-wrapper" key={key}>
          <div className="question-number">{key + 1} of {questions.length}</div>
          <div className="category">
            {category}
          </div>
          <div className="question-text">
            {question}
          </div>
          <div className="rating-wrapper">
            <Rating start={0} stop={10} 
              emptySymbol={<img src={StarIcon} className="emptySymbol" />}             
              placeholderSymbol={<img src={StarIcon} className="placeholderSymbol" />}             
              fullSymbol={<img src={StarIconGray} className="fullSymbol" />}  
              onChange={(e) => handleRating(e, id)}
              initialRating={initialValue}
            />
          </div>
        </div>
      );
    });    
  }

    return (
      <div className="container-fluid question">          
        <div className="top-header">
          <div className="response-wrapper">
            <img src={smiley} className="logo" alt="" />  
            <div className="response">
              <div className="mood-text">{mood && mood.content}</div>
              <div className="mood-label">Your answers will <strong>always remain anonymous</strong></div>
            </div>
          </div>
          <div className="company-name">Demo Inc.</div>
        </div>
        <div className="heading">
          Do you agree with the following statements:
        </div>
       
        {rows}

        <div className="additional-wrapper">
          <div className="label">Anything to add? (Optional)</div>
          <div className="extra">
            Extra feedback helps
          </div>
          <textarea rows="3" type="textarea" className="textarea" placeholder="Express yourself freely and safely. This will always remain anonymous." />
        </div>

        <button className={selectedSize === 5 ? "send-button" : "send-button disable"} onClick={() => selectedSize === 5 ? history.push('/success') : ''}>Send </button>
      </div>
    );
};

Question.propTypes = {
    getQuestionFunc: PropTypes.func.isRequired,
    getQuestionsSuccess: PropTypes.array,
    getQuestionsFailed: PropTypes.string,
    match: PropTypes.object.isRequired,
};

Question.defaultProps = {
    getQuestionsSuccess: null,
    getQuestionsFailed: null,
    match: null,
};
  
const mapStateToProps = createStructuredSelector({
    getSelectQuestions: selectGetQuestions(),
    getSelectQuestionsSuccess: selectGetQuestionsSuccess(),
    getSelectQuestionsFailed: selectGetQuestionsFailed(),
});
  
const mapDispatchToProps = dispatch => ({
    getQuestionFunc: id => dispatch(getQuestions(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);