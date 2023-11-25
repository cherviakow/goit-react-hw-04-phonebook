import PropTypes from 'prop-types';
import css from './Filter.module.css';


const Filter = ({value, onChange}) =>{
    return(
        <>
        <h1 className={css.filterHeader}>Contacts</h1>
        <p className={css.filterText}>Find contatcs by name
        <input type="text" className={css.filterInput} value={value} onChange={onChange}/>
        </p>
        </>
    )
}

export default Filter;

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}