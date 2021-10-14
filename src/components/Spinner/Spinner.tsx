import React from 'react';
import classNames from 'classnames';
import './styles.css';

type SpinnerProps = {};

const Spinner: React.FC<SpinnerProps> = (props) => {
  return <div className="spinner" />;
};

Spinner.defaultProps = {};
Spinner.displayName = 'Spinner';
export default Spinner;
