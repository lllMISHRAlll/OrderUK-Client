import React, { useState } from "react";
import style from "../styles/UserProfile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import modalStyle from "../styles/Modal.module.css";

export default function AddProducts() {
  const restaurants = [
    "Mac Donalds",
    "PAPA Jhons",
    "Texas Chicken",
    "KFC",
    "Burger King",
    "No.1 Shaurma",
  ];
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    restaurant: "",
    category: "",
    productImage: null,
  });

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, productImage: e.target.files[0] }));
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setFormData((prev) => ({ ...prev, category: newCategory }));
    }
    setNewCategory("");
    setNewDescription("");
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className={style.UserProfileMain}>
      <h2>
        <FontAwesomeIcon className={style.leftArrow} icon={faArrowLeft} />
        &nbsp;&nbsp; Add Products
      </h2>

      <div className={style.body}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Product Name</label>
            <br />
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Product Description</label>
            <br />
            <input
              type="text"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Product Price</label>
            <br />
            <input
              type="number"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Select Restaurant</label>
            <br />
            <select
              name="restaurant"
              value={formData.restaurant}
              onChange={handleInputChange}
            >
              <option value="Select Restaurant">Select Restaurant</option>
              {restaurants.map((restaurant, i) => (
                <option key={i} value={restaurant}>
                  {restaurant}
                </option>
              ))}
            </select>
          </div>
          <div className={style.categoryInput}>
            <label>Select Category</label>
            <br />
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="Select Category">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button type="button" onClick={() => setIsModalOpen(true)}>
              +
            </button>
          </div>
          <div>
            <label>Upload Product Image</label>
            <br />
            <input type="file" onChange={handleFileChange} />
          </div>
          <button className={style.submitBtn} type="submit">
            Submit
          </button>
        </form>
      </div>

      {isModalOpen && (
        <div className={modalStyle.overlay}>
          <div className={modalStyle.modal}>
            <h3>Add Category</h3>
            <input
              type="text"
              placeholder="Category Name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <input
              type="text"
              placeholder="Category Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <button onClick={handleAddCategory}>Add</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
