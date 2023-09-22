import { Card } from "./styles";
import { FiHeart } from "react-icons/fi";
import { FiPlus, FiMinus } from "react-icons/fi";

export function Cards() {
  return (
    <Card >
        <div className="dish">
          <img src="/src/assets/Mask group-11.png" alt="" />
          <FiHeart size={24} />
        </div>
        <h1>Spaguetti Gambe 2</h1>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
        <span>R$79,90</span>
        <div>
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
        </div>
    </Card>
  );
}
