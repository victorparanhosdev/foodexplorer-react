import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { LuUpload } from "react-icons/lu";
import { NewTag } from "../../components/NewTag";
export function EditDish() {
  const navigate = useNavigate();
  function ButtonBack(event) {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <Content>
        <div className="box-btn-back">
          <button type="button" onClick={(e) => ButtonBack(e)}>
            <MdArrowBackIos />
            voltar
          </button>
        </div>

        <h1>Editar Prato</h1>

        <form action="" className="edit-content">
          <div>
            <div>
              <span>Imagem do prato</span>
              <label htmlFor="form-controls">
                <LuUpload size={24} />
                Selecione imagem
              </label>
              <input type="file" id="form-controls" />
            </div>

            <div>
              <span>Nome</span>
              <input type="text" placeholder="Ex.: Salada Ceasar" />
            </div>

            <div>
              <span>Categoria</span>
              <select name="" id="">
                <option value="ref">Refeicao</option>
                <option value="sob">Sobremesas</option>
                <option value="bebidas">Bebidas</option>
              </select>
            </div>
          </div>

          <div>
            <div>
              <span htmlFor="ingredientes">Ingredientes</span>
              <div>
                <NewTag key="2" value="Pão" />
                <NewTag isnew="true" placeholder="Adicionar" />
              </div>
            </div>
            <div>
              <span>Preço</span>
              <input type="number" placeholder="R$00.00" />
            </div>
          </div>

          <div>
            <span>Descrição</span>
            <textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div>
            <button type="button">Excluir prato</button>
            <button type="submit">Salvar Alterações</button>
          </div>
        </form>
      </Content>
      <Footer />
    </Container>
  );
}
