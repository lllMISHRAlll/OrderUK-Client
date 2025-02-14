import itemStyle from "../styles/Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { cartContext } from "../context/CartInfo";

export default function ItemInCart({ item }) {
  const { handleReduceQuantity, addToCart } = useContext(cartContext);

  if (item.itemQuantity === 0) {
    return null;
  }

  const hasExtraFries = item.itemname.includes("with extra Fries");
  const displayItemName = item.itemname.replace("with extra Fries", "").trim();

  return (
    <div className={itemStyle.itemContainer}>
      <div className={itemStyle.itemMain}>
        <div
          className={itemStyle.itemQuantity}
          onClick={() => {
            addToCart({
              price: item.price,
              itemname: item.itemname,
              itemQuantity: 1,
            });
          }}
        >
          {item.itemQuantity}x
        </div>
        <div className={itemStyle.priceAndItemInfo}>
          <p>₹ {item.price}</p>
          <h4>{displayItemName}</h4>
          {hasExtraFries && <span>With Extra Fries</span>}
        </div>
      </div>
      <div className={itemStyle.deleteItemBtn}>
        <FontAwesomeIcon
          icon={faTrash}
          style={{ color: "#c40e0e" }}
          onClick={() => handleReduceQuantity(item)}
        />
      </div>
    </div>
  );
}
