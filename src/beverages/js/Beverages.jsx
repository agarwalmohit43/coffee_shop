import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchBeveragesLists } from '../action';
import { addToCart } from '../../cart/action';
import { BEVERAGES } from '../../Constants';

export const Beverages = props => {
  // console.clear();
  console.log(props);

  const renderList = props.beveragesLists.items.map((food, index) => {
    return (
      <div className="item" key={index}>
        <div className="right floated content">
          <button
            className="ui button"
            onClick={() => {
              props.addToCart({ ...food, type: BEVERAGES, qty: 1 });
              toast.success(food.name + ' added to cart', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            <i className="add icon"></i>
          </button>
        </div>
        <i className={`large middle aligned icon ${props.beveragesLists.iconName}`} />
        <div className="content">
          {food.name}
          <div className="description">{food.price}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui segment center">
        <h3>Barista Beverages</h3>
      </div>
      <div className="ui celled list">{renderList}</div>
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

const mapStateToProps = (state, oldProps) => {
  return state;
};

const mapDispatchToProps = {
  fetchBeveragesLists,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Beverages);
