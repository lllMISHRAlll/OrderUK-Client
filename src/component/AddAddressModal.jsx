import React, { useState, useEffect } from "react";
import modalStyle from "../styles/Modal.module.css";
import { toast } from "react-toastify";
import axios from "axios";

export default function AddAddressModal({
  isOpen,
  onClose,
  onSave,
  initialData,
}) {
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    pinCode: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        state: "",
        city: "",
        pinCode: "",
        phoneNumber: "",
        address: "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "phoneNumber" || name === "pinCode"
          ? Number(value) || ""
          : value,
    });
  };

  const handleSave = () => {
    if (!formData.address.trim())
      return toast.error("Fill all the fields to proceed !!");

    onSave(formData);
    setFormData({
      state: "",
      city: "",
      pinCode: "",
      phoneNumber: "",
      address: "",
    });
    onClose();

    toast.success("Succesfull");
  };

  if (!isOpen) return null;

  return (
    <div className={modalStyle.overlay}>
      <div className={modalStyle.modal}>
        <h2>{initialData ? "Edit Address" : "Add New Address"}</h2>

        <div className={modalStyle.formRow}>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City/District"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className={modalStyle.fullAddressDiv}>
          <textarea
            name="address"
            placeholder="Enter full address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className={modalStyle.buttons}>
          <button onClick={handleSave}>
            {initialData ? "Update" : "Save"}
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
