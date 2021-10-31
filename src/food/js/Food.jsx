import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchFoodLists } from '../action';
import { addToCart } from '../../cart/action';
import { FOOD } from '../../Constants';

export const Food = props => {
  // console.clear();
  console.log(props);

  const renderList = props.foodsLists.items.map((food, index) => {
    return (
      <div className="item" key={index}>
        <div className="right floated content">
          <button
            className="ui button"
            onClick={() => {
              props.addToCart({ ...food, type: FOOD, qty: 1 });
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
        <i className={`large middle aligned icon ${props.foodsLists.iconName}`} />
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
        <h3>Barista Food</h3>
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
  fetchFoodLists,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Food);
