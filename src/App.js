import styles from './App.module.css';
import Accordian from './components/Accordian';

import questions from './data';

function App() {
  return (
    <main className={styles.main}>
      <h3 className={styles.heading}>Questions and answers about login</h3>
      <div className={styles.questions}>
        {questions.map(question => (
          <Accordian
            title={question.title}
            info={question.info}
            key={question.id}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
