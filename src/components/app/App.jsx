import React from 'react';
import Section from '../section/Section';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistic from '../statistic/Statistic';

import css from './app.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementOption = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
    return total;
  };

  countPositiveFeedbackPercentage() {
    this.postiveFeedbackPercentage =
      (this.state.good * 100) / this.countTotalFeedback();
    return Math.floor(this.postiveFeedbackPercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.incrementOption}
          />
        </Section>

        {this.countTotalFeedback() !== 0 ? (
          <Section title="Statistic">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <h4 className={css.alterTitle}>No feedback</h4>
        )}
      </>
    );
  }
}

export default App;
