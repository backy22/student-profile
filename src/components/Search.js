import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Search.css";

const searchClasses = variant =>
  classNames({
    'w-4/5': !variant || variant === 'large',
    'w-1/5': variant === 'small',
    'border p-4': true
  });

const Search = ({ variant, placeholder, onChange, ...rest }) => (
  <input type="text" className={searchClasses(variant)} onChange={onChange} placeholder={placeholder} />
);

Search.propTypes = {
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default Search;