import React from "react";
import ReactDOM from "react-dom";
import { removeAllItems } from "../../redux/shopping-cart/cartItemsSlice";
export default function Paypal(props) {
  const PaypaylButton = window.paypal.Buttons.driver("react", {
    React,
    ReactDOM,
  });
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: Math.ceil(parseFloat(props.totalPrice) / 23000),
          },
        },
      ],
    });
  };
  const onApprove = async (data, actions) => {
    await actions.order.capture();
    alert("Bạn đã thanh toán thành công !");
    await props.setSuccess(true);
    removeAllItems();
    window.location.reload(true);
  };
  const onError = async (err) => {
    console.error("error", err);
  };
  return (
    <div>
      <PaypaylButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
        onError={(err) => onError(err)}
      />
    </div>
  );
}
