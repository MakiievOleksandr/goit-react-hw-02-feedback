import PropTypes from 'prop-types';

import css from './statistic.module.css';

function Statistic({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={css.statsWraper}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p className={positivePercentage < 50 ? css.negative : css.positive}>
        Positive feedback:{' '}
        {positivePercentage === 0 ? 0 : `${positivePercentage}%`}
      </p>
    </div>
  );
}

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
