import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  console.log();

  const btn = options.map((option, index) => (
    <button
      key={index}
      className={`${css.button} ${css[option]}`}
      type="button"
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
  return <div className={css.options}>{btn}</div>;
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
