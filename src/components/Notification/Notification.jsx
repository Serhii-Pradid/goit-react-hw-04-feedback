import PropTypes from 'prop-types';
import css from 'components/Notification/Notification.module.css'

export const Notification = ({message}) => {
    return(
        <div>
            {message && <p className={css.textMessage}> {message} </p>}
        </div>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notification;