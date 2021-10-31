// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { deleteItemFromCart } from '../action';
import { BEVERAGES, FOOD, QUENCHERS } from '../../Constants';

export const Cart = props => {
  console.clear();
  console.log(props);

  const renderList = props.cartLists.items.map((item, index) => {
    return (
      <div className="item" key={index}>
        <div className="right floated content">{item.totalPrice}</div>
        <i
          className={`large middle aligned icon ${
            item.type === BEVERAGES ? 'coffee' : item.type === FOOD ? 'certificate' : 'beer'
          }`}
        />
        <div className="content">
          {item.name}
          <i
            className="large middle aligned icon trash"
            onClick={() => {
              props.deleteItemFromCart(item);
              toast.info(item.name + ' is removed', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          />
          <div className="description">
            {item.qty} * {item.price}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui segment center">
        <h3>Barista Cart</h3>
      </div>
      {props.cartLists.total !== 0 ? (
        <div className="ui celled list">
          {renderList}
          <div className="item" key={new Date().getTime()}>
            <div className="right floated content">{props.cartLists.total}</div>
            <div className="content">Total</div>
          </div>
          <Link to="/print" class="ui right labeled icon button">
            <i class="right arrow icon"></i>
            Place order
          </Link>
        </div>
      ) : (
        <div>
          <h1>Cart is empty</h1>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  deleteItemFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
