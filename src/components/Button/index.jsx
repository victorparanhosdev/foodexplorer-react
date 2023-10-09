import { Container } from "./styles";
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useState, useEffect } from "react";
export function Button({updatedItem, itemInfo}) {

  const [quatitidade, setQuantidade] = useState(1)


  function minusButton() {
    if (quatitidade < 2) {
      return;
    }
    setQuantidade((quatitidade - 1));
    updatedItem(itemInfo, quatitidade)

  }

 

  


  function maxButton() {
    setQuantidade((quatitidade + 1));
    updatedItem(itemInfo, quatitidade)

  }



  return (
    <Container>
      <div>
        <button onClick={minusButton} type="button">
          <FiMinus />
        </button>
        <input type="text" value={String(quatitidade).padStart(2, '0')} readOnly />
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
