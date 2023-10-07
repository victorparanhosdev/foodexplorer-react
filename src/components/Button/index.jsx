import { Container } from "./styles";
import { FiPlus, FiMinus } from 'react-icons/fi';

export function Button({ infoValue, onInfoValueChange }) {
 
  function minusButton() {
    if (infoValue < 2) {
      return;
    }
    onInfoValueChange(infoValue - 1);
  }

  function maxButton() {
    onInfoValueChange(infoValue + 1);
  }

  return (
    <Container>
      <div>
        <button onClick={minusButton} type="button">
          <FiMinus />
        </button>
        <input type="text" value={String(infoValue).padStart(2, '0')} readOnly />
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
