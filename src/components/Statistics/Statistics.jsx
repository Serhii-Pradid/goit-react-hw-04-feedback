import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
        return (
           <ul className={css.feedbackItem}>
        <div className={css.feedbackStat}>
            <li >Good:  <span> {good} </span> </li>
            <li>Neutral:  <span> {neutral} </span> </li>
            <li>Bad:  <span> {bad} </span> </li>
        </div>
        <div className={css.totalFeedback}>
            <li>Total:  <span>{total}</span></li>
            <li>Positive percentage:  <span>{positivePercentage}%</span></li>
        </div>
    </ul>          
        );
    };
    
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    //positivePercentage: PropTypes.number.isRequired,
}

//export default Statistics;