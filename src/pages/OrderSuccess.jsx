import { useNavigate } from "react-router-dom";
import styles from "../styles/OrderSuccess.module.css";
import { useContext } from "react";
import { cartContext } from "../context/CartInfo";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/");
  };
  const { cartItem } = useContext(cartContext);

  return (
    <div className={styles.container}>
      <div className={styles.successIcon}>✓</div>
      <h2 className={styles.title}>Order Placed Successfully</h2>
      <p className={styles.subtitle}>
        Your order is confirmed and on its way. Get set to savor your chosen
        delights!
      </p>

      <div className={styles.orderDetails}>
        {cartItem.map((item, index) => (
          <div key={index} className={styles.orderItem}>
            <p>{item.itemname}</p>
          </div>
        ))}
      </div>

      <button onClick={handleBackToHome} className={styles.backButton}>
        Back to Home
      </button>
    </div>
  );
};

export default OrderSuccess;
