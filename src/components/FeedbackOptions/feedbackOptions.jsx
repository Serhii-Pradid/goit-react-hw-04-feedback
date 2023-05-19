import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    return (
    
        <div className={css.feedback}>
            {options.map(btn => (
                <button 
                key={btn}
                type='button'
                name={btn}
                onClick={() => onLeaveFeedback(btn)} className={css.btnOnClick} >
                <span className={css.btnTitle}>{btn}</span>
            </button>
             ))}
        </div>
         )
}
   

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;

