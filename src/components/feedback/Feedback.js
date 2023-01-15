import React from 'react';

class Feedback extends React.Component {
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

  countTotalFeedback() {
    const total = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
    return total;
  }

  countPositiveFeedbackPercentage() {
    this.postiveFeedbackPercentage =
      (this.state.good * 100) / this.countTotalFeedback();
    return Math.floor(this.postiveFeedbackPercentage);
  }

  render() {
    return (
      <div className="feedback">
        <section className="section__feedback">
          <h2>Please leave feedback</h2>
          <div className="controls">
            <button type="button" onClick={this.goodFeedbackIncrement}>
              Good
            </button>
            <button type="button" onClick={this.neutralFeedbackIncrement}>
              Neutral
            </button>
            <button type="button" onClick={this.badFeedbackIncrement}>
              Bad
            </button>
          </div>
        </section>
        <section className="section__statistic">
          <h2>Statistic</h2>
          <div>
            <p>
              Good: <span>{this.state.good}</span>
            </p>
            <p>
              Neutral: <span>{this.state.neutral}</span>
            </p>
            <p>
              Bad: <span>{this.state.bad}</span>
            </p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>
              Positive feedback:{' '}
              {this.countTotalFeedback() === 0
                ? 0
                : `${this.countPositiveFeedbackPercentage()}%`}
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Feedback;
