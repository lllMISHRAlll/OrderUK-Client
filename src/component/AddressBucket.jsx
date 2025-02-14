import React, { useState, useEffect } from "react";
import AStyle from "../styles/Address.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AddressCard from "./AddressCard";
import AddAddressModal from "./AddAddressModal";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getBaseURI } from "../utils/config.js";

export default function AddressBucket() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const token = localStorage.getItem("token");

  const fetchAddresses = async () => {
    if (!token) return toast.error("No authentication token found.");

    try {
      const { data } = await axios.get(`${getBaseURI()}/api/address`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Fetched Addresses:", data);
      setAddresses(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error("Failed to fetch addresses.");
      setAddresses([]);
    }
  };
  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleSave = async (newAddress) => {
    try {
      if (editingIndex !== null) {
        const addressId = addresses[editingIndex]._id;
        const { data } = await axios.put(
          `${getBaseURI()}/api/address/edit/${addressId}`,
          newAddress,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        toast.success("Address updated successfully");
        setEditingIndex(null);
      } else {
        const { data } = await axios.post(
          `${getBaseURI()}/api/address/add`,
          newAddress,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        toast.success("Address added successfully");
      }
    } catch (error) {
      toast.error("Failed to save address.");
    }

    setIsModalOpen(false);
    fetchAddresses();
  };

  const handleRemove = async (index) => {
    const addressId = addresses[index]._id;
    try {
      await axios.delete(`${getBaseURI()}/api/address/delete/${addressId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // setAddresses(addresses.filter((_, i) => i !== index));

      fetchAddresses();
      toast.success("Address deleted successfully");
    } catch (error) {
      toast.error("Failed to delete address.");
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const navigate = useNavigate();

  const addressToEdit = editingIndex !== null ? addresses[editingIndex] : null;

  return (
    <div className={AStyle.addressmain}>
      <div className={AStyle.header}>
        <h2 onClick={() => navigate(-1)}>
          <FontAwesomeIcon className={AStyle.leftArrow} icon={faArrowLeft} />
          &nbsp; &nbsp;Your Addresses
        </h2>
      </div>
      <div className={AStyle.body}>
        <div className={AStyle.addAddress}>
          <div>
            <button type="button" onClick={() => setIsModalOpen(true)}>
              +
            </button>
            <p>Add Address</p>
          </div>
        </div>
        {Array.isArray(addresses) && addresses.length > 0 ? (
          addresses.map((addr, index) =>
            addr ? (
              <AddressCard
                key={addr._id}
                address={addr}
                onEdit={() => handleEdit(index)}
                onRemove={() => handleRemove(index)}
              />
            ) : null
          )
        ) : (
          <p>No addresses found.</p>
        )}
      </div>

      <AddAddressModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingIndex(null);
        }}
        onSave={handleSave}
        initialData={addressToEdit}
      />
    </div>
  );
}
