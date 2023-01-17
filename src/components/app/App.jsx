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

  goodFeedbackIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralFeedbackIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badFeedbackIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
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
    const onBtn = [
      this.goodFeedbackIncrement,
      this.neutralFeedbackIncrement,
      this.badFeedbackIncrement,
    ];
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={onBtn}
          />
        </Section>

        {this.countTotalFeedback() !== 0 ? (
          <Section title="Statistic">
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
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
