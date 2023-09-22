import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function Details() {

  const navigate = useNavigate()
  function ButtonBack(){
    navigate(-1)
  }
  return (
    <Container>
      <Header />

      <Content>
        <div className="box-btn-back">
          <button onClick={ButtonBack}>
            <MdArrowBackIos />
            voltar
          </button>
        </div>

        <div className="dish">
          <div>
            <img src="/src/assets/Mask group-1.png" alt="" />
          </div>

          <div>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>
            <div className="tags-food">
              <span>afalce</span>
              <span>cebola</span>
              <span>pão</span>
              <span>pepino</span>
              <span>tomate</span>
            </div>

            <div className="box-incluir">
              <div>
                <button>
                  <FiMinus />
                </button>
                <input type="text" value="01" readOnly />
                <button>
                  <FiPlus />
                </button>
              </div>
              <button className="btn-incluir" type="button">
                incluir • R$25,00
              </button>
            </div>
          </div>
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
