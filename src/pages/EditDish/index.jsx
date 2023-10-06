import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { LuUpload } from "react-icons/lu";
import { useState, useEffect } from "react";
import { NewTag } from "../../components/NewTag";
import { api } from "../../services/api";
export function EditDish() {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [stateingredients, setIngredients] = useState([]);
  const [newingredients, setNewIngredients] = useState("");

  function removeItem(name) {

    const updated = stateingredients.filter((ingredit) => ingredit !== name );

    setIngredients(updated);
  }

  function SalvedEdit(){

  }
  
  function handleClickNewIngredients() {
    if (newingredients === "") {
      return alert("Não aceitamos ingrediente vazio");
    }

    setIngredients((prevState) => [...prevState, newingredients]);
    document.querySelector(".btn-add").value = "";
    setNewIngredients("")
  }

  
  function ButtonBack(event) {
    event.preventDefault();
    navigate(-1);
  }

  const params = useParams();

  useEffect(() => {
    async function fetchEditDish() {
      const response = await api.get(`/dish/${params.id}`);
      setData(response.data);
      setIngredients(response.data.ingredients.map(item => item.name));
    }

    fetchEditDish();
  }, []);

  useEffect(()=> {
   
  }, [stateingredients])

  return (
    <Container>
      <Header />

      {data && (
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
                  {data.dish.imgurl ? data.dish.imgurl : "Selecione imagem"}
                </label>
                <input type="file" id="form-controls" />
              </div>

              <div>
                <span>Nome</span>
                <input
                  type="text"
                  defaultValue={data.dish.name}
                  placeholder="Ex.: Salada Ceasar"
                />
              </div>

              <div>
                <span>Categoria</span>
                <select name="" id="" defaultValue={data.dish.category}>
                  <option value="Refeições">Refeições</option>
                  <option value="Sobremesas">Sobremesas</option>
                  <option value="Bebidas">Bebidas</option>
                </select>
              </div>
            </div>

            <div>
              <div>
                <span htmlFor="ingredientes">Ingredientes</span>
                <div>
                  {stateingredients.map((name, index) => (
                    <NewTag
                      onClick={() => removeItem(name)}
                      key={String(index)}
                      value={name}
                    />
                  ))}
                  {}

                  <NewTag
                    onChange={(e) => setNewIngredients(e.target.value)}
                    onClick={handleClickNewIngredients}
                    isnew="true"
                    placeholder="Adicionar"
                    className="btn-add"
                  />
                </div>
              </div>
              <div>
                <span>Preço</span>
                <input type="number" defaultValue={data.dish.price} placeholder="R$00.00" />
              </div>
            </div>

            <div>
              <span>Descrição</span>
              <textarea
              defaultValue={data.dish.description}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div>
              <button type="button">Excluir prato</button>
              <button onClick={SalvedEdit} type="submit">Salvar Alterações</button>
            </div>
          </form>
        </Content>
      )}
      <Footer />
    </Container>
  );
}
