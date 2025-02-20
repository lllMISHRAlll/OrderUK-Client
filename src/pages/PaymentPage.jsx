import { useState } from "react";
import styles from "../styles/PaymentPage.module.css";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("wallet");
  const walletBalance = 300;

  const navigate = useNavigate();

  const paymentMethods = [
    { id: "wallet", name: "Wallet", balance: walletBalance },
    { id: "maestrocard", name: "MaestroCard" },
    { id: "paypal", name: "Paypal" },
    { id: "stripe", name: "Stripe" },
  ];

  const handleProceedPayment = () => {
    navigate("/ordersuccess");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          ←
        </button>
        <h1>Choose and Pay</h1>
      </header>

      <div className={styles.paymentMethods}>
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={styles.paymentMethod}
            onClick={() => setSelectedMethod(method.id)}
          >
            <div className={styles.methodInfo}>
              <div className={styles.methodIcon}></div>
              <div>
                <div className={styles.methodName}>{method.name}</div>
                {method.balance && (
                  <div className={styles.balance}>
                    Available balance: ₹{method.balance}
                  </div>
                )}
              </div>
            </div>
            <input
              type="radio"
              checked={selectedMethod === method.id}
              onChange={() => setSelectedMethod(method.id)}
              className={styles.radio}
            />
          </div>
        ))}

        <button className={styles.addCard}>
          <span>+</span> Add Debit Card
        </button>
      </div>

      <div className={styles.paymentSummary}>
        <div className={styles.amountRow}>
          <span>Amount to be payed</span>
          <span className={styles.amount}>₹240</span>
        </div>
        <button className={styles.proceedButton} onClick={handleProceedPayment}>
          Proceed Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
