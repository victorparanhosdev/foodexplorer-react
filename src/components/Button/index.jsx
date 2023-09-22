import { Container } from "./styles";
import { FiPlus, FiMinus } from 'react-icons/fi';

export function Button() {
  return (
    <Container>
      <div>
        <button>
          <FiMinus />
        </button>
        <input type="text" value={0} readOnly />
        <button>
          <FiPlus />
        </button>
      </div>
      <button className="btn-incluir" type="button">
        incluir
      </button>
    </Container>
  );
}
