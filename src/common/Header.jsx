import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as Constants from '../Constants';

export const Header = props => {
  const INITIAL_VALUE = {
    activePath: '/',
  };

  const [state, setState] = useState(INITIAL_VALUE);

  let onClickHandler = () => {
    setState(prevState => {
      return { ...prevState, activePath: window.location.pathname };
    });
  };

  let { BEVERAGES, FOOD, QUENCHERS } = Constants;

  return (
    <>
      <div className="ui secondary pointing menu">
        <Link
          to="/"
          className={`${state.activePath === '/' ? '' : ''} item`}
          onClick={() => onClickHandler}
        >
          {BEVERAGES}
        </Link>
        <Link
          to="/food"
          className={`${state.activePath === '/food' ? '' : ''} item`}
          onClick={() => onClickHandler}
        >
          {FOOD}
        </Link>
        <Link
          to="/quenchers"
          className={`${state.activePath === '/quenchers' ? '' : ''} item`}
          onClick={() => onClickHandler}
        >
          {QUENCHERS}
        </Link>
        <div className="right menu">
          <Link
            to="/cart"
            className={`${state.activePath === '/cart' ? '' : ''} item`}
            onClick={() => onClickHandler}
          >
            <h2 class="ui header">
              <i class="small icons">
                <i class="shopping cart icon"></i>
                <i class="inverted corner add icon"></i>
              </i>
              {props.cartLists.items.length !== 0 ? props.cartLists.items.length : ''}
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Header);
