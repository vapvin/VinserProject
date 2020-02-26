import React from 'react';
import PropTypes from 'prop-types';
// import styled from '../../typed-components';

interface IProps {
  isLoggedIn: boolean;
}
const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) =>
  isLoggedIn ? <span>Your In</span> : <span>Yr out</span>;

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;
