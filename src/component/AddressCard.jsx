import React, { useContext } from "react";
import AStyle from "../styles/Address.module.css";
import { UserInfoContext } from "../context/UserInfo";
import { cartContext } from "../context/CartInfo";
import { useNavigate } from "react-router-dom";

export default function AddressCard({ address, onEdit, onRemove }) {
  const { signUp } = useContext(UserInfoContext);
  const { setAddress } = useContext(cartContext);
  const navigate = useNavigate();

  const formattedAddress = `${address?.address || "No address provided"}, ${
    address?.city || ""
  }, ${address?.state || ""}, ${address?.pinCode || ""}`;

  const handleAddressClick = () => {
    sessionStorage.setItem("address", formattedAddress);
    setAddress(formattedAddress);
    navigate("/checkout");
  };

  return (
    <div className={AStyle.cardMain} onClick={handleAddressClick}>
      <div className={AStyle.addresstext}>
        <h4>{signUp?.name || "User Name"}</h4>
        <p>
          <strong>Address:</strong> {formattedAddress}
        </p>
        <p>
          <strong>Phone Number:</strong> {address?.phoneNumber || "N/A"}
        </p>
      </div>
      <div className={AStyle.editPanel}>
        <span onClick={onEdit}>Edit</span>
        <div className={AStyle.verticalBar}></div>
        <span onClick={onRemove}>Remove</span>
      </div>
    </div>
  );
}
