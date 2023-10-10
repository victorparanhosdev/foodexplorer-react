import { Container } from "./styles";
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useState, useEffect } from "react";
export function Button({onChangeQuantity, itemID}) {

  const [quantity, setQuantity] = useState(1)


  function minusButton() {
    if (quantity < 2) {
      return;
    }
    setQuantity(quantity - 1);
    onChangeQuantity(itemID, quantity - 1)

  }

  function maxButton() {
    setQuantity(quantity + 1);
    onChangeQuantity(itemID, quantity + 1)

  }



  return (
    <Container>
      <div>
        <button onClick={minusButton} type="button">
          <FiMinus />
        </button>
        <input type="text" value={String(quantity).padStart(2, '0')} readOnly />
        <button onClick={maxButton} type="button">
          <FiPlus />
        </button>
      </div>
      <button className="btn-incluir" type="button">
        incluir
      </button>
    </Container>
  );
}
