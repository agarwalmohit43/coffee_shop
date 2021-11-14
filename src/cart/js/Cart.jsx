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
  
  const renderList2 = props.cartLists.items.map((item, index) => {
    return (<tr>
      <td>
        <h4 class="ui image header">
          <i
          className={`large middle aligned icon ${
            item.type === BEVERAGES ? 'coffee' : item.type === FOOD ? 'certificate' : 'beer'
          }`}
        />
          <div class="content">
            {item.name}
        </div>
      </h4></td>
      <td>
        {item.qty}
      </td><td>
        {item.price}
      </td>
	  <td>{`${item.discount}%`}</td>
	  <td><i
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
		</td>
		<td>{item.totalPrice}</td>
		<td>{item.priceAfterDiscount}</td>
    </tr>);
  });

  return (
    <div>
      <div className="ui segment center">
        <h3>Barista Cart</h3>
      </div>
      {props.cartLists.total !== 0 ? (
        <><table class="ui very basic collapsing celled table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Action</th>
              <th>Price</th>
              <th>Discounted Price</th>
            </tr>
          </thead>
          <tbody>
            {renderList2}
          </tbody>
        </table>
        <br/>
        <div className="item" key={new Date().getTime()}>
            <h3>Total: {props.cartLists.total}</h3>
          </div>
          <br/><Link to="/print" class="ui right labeled icon button">
            <i class="right arrow icon"></i>
            Place order
          </Link>
          </>
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
