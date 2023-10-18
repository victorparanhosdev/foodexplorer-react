import { Container } from "./styles";
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useState, useEffect } from "react";
export function Button({onChangeQuantity, setReq, itemInfo, cartItem}) {

  const [quantity, setQuantity] = useState(1)


  function minusButton() {
    if (quantity < 2) {
      return;
    }
    setQuantity(quantity - 1);
    onChangeQuantity(itemInfo.id, quantity - 1)

  }

  function maxButton() {
    setQuantity(quantity + 1);
    onChangeQuantity(itemInfo.id, quantity + 1)

  }
  function handleClickAdd(setReq){
    cartItem(setReq, quantity)
    

  }



  return (
    <Container>
      <div>
        <button onClick={minusButton} type="button">
          <FiMinus size={18}/>
        </button>
        <input type="text" value={String(quantity).padStart(2, '0')} readOnly />
        <button onClick={maxButton} type="button">
          <FiPlus size={24}/>
        </button>
      </div>
      <button onClick={() => handleClickAdd(setReq)} className="btn-incluir" type="button">
        incluir
      </button>
    </Container>
  );
}
