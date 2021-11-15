// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { clearCart } from '../cart/action';

export const PrintOrder = props => {
  useEffect(() => {
    props.clearCart();
  });

  return (
    <div>
      <h3>Your order will be ready soon :)</h3>
    </div>
  );
};

export default connect(null, {
  clearCart,
})(PrintOrder);
