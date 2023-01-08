import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CommentDenied({ type }) {
  // background color
  const backgroundColor = {
    softPurple: '#bab0ff',
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
  };

  // styled component
  const Container = styled.div`
    background-color: ${backgroundColor[type]};
    border-radius: 16px;
    padding: 9px 20px;
    display: flex;
    gap: 3px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  `;

  const Bold = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #7b67fe;
  `;

  // default props
  Container.defaultProps = {
    backgroundColor: '#bab0ff',
    borderRadius: '16px',
    padding: '9px 20px',
  };

  Bold.defaultProps = {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
  };

  return (
    <Container>
      Kamu harus{' '}
      <span>
        <Link style={{ textDecoration: 'none' }} to="/login">
          <Bold>Login</Bold>
        </Link>
      </span>{' '}
      terlebih dahulu untuk menambah komentar.
    </Container>
  );
}

CommentDenied.propTypes = {
  /** Type of background, it will change the background color of element  */
  type: PropTypes.oneOf(['softPurple', 'success', 'error', 'warning', 'info']),
};

export default CommentDenied;
