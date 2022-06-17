import { MdKeyboardAlt, MdMic, MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';
import './SearchInputField.scss';

const iconColor = '#60666c';

const SearchInputField = props => (
  <div style={props.style} className="searchInputFieldWrapper">
    <MdSearch size="1.5em" color={iconColor} />
    <input type="search" />
    <button className="icon-button">
      <MdKeyboardAlt size="1.5em" color={iconColor} />
    </button>
    <button className="icon-button">
      <MdMic size="1.5em" color={iconColor} />
    </button>
  </div>
);

SearchInputField.propTypes = {
  style: PropTypes.object,
};

export default SearchInputField;
