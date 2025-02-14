import React, { useContext } from "react";
import AStyle from "../styles/Address.module.css";
import { UserInfoContext } from "../context/UserInfo";

export default function AddressCard({ address, onEdit, onRemove }) {
  const { signUp } = useContext(UserInfoContext);

  const formattedAddress = `${address?.address || "No address provided"}, ${
    address?.city || ""
  }, ${address?.state || ""}, ${address?.pinCode || ""}`;

  return (
    <div className={AStyle.cardMain}>
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
