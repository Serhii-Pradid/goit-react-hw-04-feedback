import PropTypes from 'prop-types';
import css from 'components/Section/Section.module.css';

export const Section = ({title , children}) => {
    return(
        <div className={css.section}>
            
            {title && <h2> {title} </h2>}
            {children}
            
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

export default Section;