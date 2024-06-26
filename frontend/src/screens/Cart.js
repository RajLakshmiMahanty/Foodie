import React from "react"; // Import React
import { useCart, useDispatchCart } from "../components/ContextReducer"; // Import custom hooks from ContextReducer
import { FaTrash } from "react-icons/fa"; // Import trash icon from react-icons

// Functional component for Cart
export default function Cart() {
  let data = useCart(); // Use custom hook to access cart data
  let dispatch = useDispatchCart(); // Use custom hook to access dispatch function

  // If cart is empty, display message
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty!</div>
      </div>
    );
  }

  // Function to handle checkout
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail"); // Get user email from local storage
    let response = await fetch(
      "https://foodie-rwly.onrender.com/api/orderData",
      {
        // Fetch request to send order data
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString(),
        }),
      }
    );
    console.log("Order Response:", response); // Log order response

    // If order is successful, empty the cart
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  // Calculate total price of items in cart
  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      {/* Cart table */}
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* Map through cart items */}
            {data.map((food, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  {/* Button to remove item from cart */}
                  <button
                    type="button"
                    className="btn p-0"
                    onClick={() => {
                      dispatch({ type: "REMOVE", index: index });
                    }}
                  >
                    <FaTrash /> {/* Trash icon for delete */}
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2">Total Price:{totalPrice}/</h1>{" "}
          {/* Total price */}
        </div>
        <div>
          {/* Checkout button */}
          <button className="btn bg-success mt-5" onClick={handleCheckOut}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
