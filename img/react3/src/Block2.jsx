import { useContext, useState } from "react";
import { UserContext } from "./App"; 

function Block2() {
  const [text, setText] = useState("Order");
  const { count, upCount, downCount, resetCount } = useContext(UserContext);

  function cancel() {
    if (text === "Ordered") {
      setText("Order");
      resetCount();
    }
  }

  function handleOrder() {
    if (count > 0) {
      setText("Ordered");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div>
          <h1>iPhone 18 ProMax</h1>
          <p>Price: 1500$</p>
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "30px" }}>
          <button
            onClick={cancel}
            style={{
              color: "white",
              borderRadius: "10px",
              backgroundColor: "Red",
              width: "100px",
              height: "30px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Cancel Order
          </button>
          
          <button
            onClick={handleOrder}
            style={{
              color: "white",
              borderRadius: "10px",
              backgroundColor: text === "Ordered" ? "Gray" : "Green",
              width: "100px",
              height: "30px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {text}
          </button>
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px", alignItems: "center" }}>
        <button onClick={downCount}>-</button>
        <p style={{ margin: 0 }}>
          quantity: <span>{count}</span>
        </p>
        <button onClick={upCount}>+</button>
      </div>

      <h4>Total price: {1500 * count}$</h4>
    </div>
  );
}

export default Block2;