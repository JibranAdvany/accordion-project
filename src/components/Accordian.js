import React, { useState } from 'react';
import styles from './Accordian.module.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Accordian = ({ title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswerToggle = () => {
    setShowAnswer(prev => !prev);
  };

  return (
    <>
      <div className={styles.questionContainer}>
        <div className={styles.titleContainer}>
          <h4>{title}</h4>
          <div className={styles.icon} onClick={handleAnswerToggle}>
            {!showAnswer ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </div>
        </div>
        {showAnswer && <p>{info}</p>}
      </div>
    </>
  );
};

export default Accordian;
