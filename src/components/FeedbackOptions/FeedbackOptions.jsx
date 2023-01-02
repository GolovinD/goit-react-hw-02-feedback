import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
   
    return (
        <div>         
                <div className={css.btns}>
                    <button
                        className={css.btn}
                        type="button"
                        onClick={() => onLeaveFeedback('good')}
                    >Good</button>
                    <button
                        className={css.btn}
                        type="button"
                        onClick={() => onLeaveFeedback('neutral')}
                    >Neutral</button>
                    <button
                        className={css.btn}
                        type="button"
                        onClick={() => onLeaveFeedback('bad')}
                    >Bad</button>                  
                </div>
        </div>
        )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;