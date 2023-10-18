import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { LuUpload } from "react-icons/lu";
import { NewTag } from "../../components/NewTag";
import {toast} from "react-toastify"
import { api } from "../../services/api";
import { useState } from "react";

export function NewDish() {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Refeições");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newingredients, setNewIngredients] = useState("");

  const navigate = useNavigate();

  function handleImg(event) {
    const fileEvent = event.target.files[0];
    setFileName(fileEvent.name);
    setFile(fileEvent);
    
  }


  function handleClickNewIngredients() {
    if (newingredients === "") {
      return toast.warning("Não aceitamos ingrediente vazio", {theme: "light",  autoClose: 1500, pauseOnHover: false});
    }

    setIngredients((prevState) => [...prevState, newingredients]);
    setNewIngredients("");
  }

  function handleClickRemoveIngredients(deleted) {
    const filtered = ingredients.filter((tag) => tag !== deleted);
    setIngredients(filtered);
  }

  function ButtonBack(event) {
    event.preventDefault();
    navigate(-1);
  }
  function transformarParaSingular(palavra) {
    // Remove "ies" e adiciona "y" para transformar palavras como "bodies" em "body"
    if (palavra.endsWith("ções")) {
      return palavra.slice(0, -4) + "ção";
    }
    // Remove "es" para transformar palavras como "watches" em "watch"
    else if (palavra.endsWith("as")) {
      return palavra.slice(0, -2) + "a";
    } else {
      return palavra;
    }
  }

  async function handleNewDish(event) {
    event.preventDefault();


    if(!file) {
      return toast.warning("Selecione uma imagem para cadastrar o Prato", {theme: "light",  autoClose: 1500, pauseOnHover: false})
    }
    if (!name) {
      return toast.warning("Preencha o campo 'Nome' para seguir com o cadastro", {theme: "light",  autoClose: 1500, pauseOnHover: false});
    }

    if (newingredients) {
      return toast.warning("Você digitou o ingrediente mas não adicionou", {theme: "light",  autoClose: 1500, pauseOnHover: false});
    }

    if (!price) {
      return toast.warning(
        `Coloque um Preço para a ${transformarParaSingular(
          category
        )}`, {theme: "light",  autoClose: 1500, pauseOnHover: false}
      );
    }

    if (!description) {
      return toast.warning("Coloque uma descrição", {theme: "light",  autoClose: 1500, pauseOnHover: false});
    }


    const dishData = {
      name,
      category,
      price,
      description,
      ingredients,
    };
  
    const formData = new FormData();
    
    if (file) {
      formData.append("uploadImg", file);

    }

    formData.append("dishData", JSON.stringify(dishData));
  
    const stateToast = toast.promise(api.post("/dish", formData), {
      pending: "Adicionando novo prato..."
    });

    try {
      
      await stateToast
      toast.success("Prato adicionado com sucesso!!", { icon: "🗑️", theme: "light",  autoClose: 1000, pauseOnHover: false})
      toast.dismiss(stateToast)
      navigate("/");
    

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possivel adicionar o prato");
      }
    }


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

        <h1>Adicionar Prato</h1>

        <form action="" className="edit-content">
          <div>
            <div>
              <span>Imagem do prato</span>
              <label htmlFor="imgurl">
                <LuUpload size={24} />
                {fileName ? fileName : "Selecione imagem"}
              </label>
              <input
                onChange={handleImg}
                type="file"
                name="imgurl"
                id="imgurl"
              />
            </div>

            <div>
              <span>Nome</span>
              <input
                onChange={(e) => {
                  setName(e.target.value.trim());
                }}
                type="text"
                placeholder="Ex.: Salada Ceasar"
              />
            </div>

            <div>
              <span>Categoria</span>
              <select
                onChange={(e) => setCategory(e.target.value)}
                defaultValue="Refeições"
                name=""
                id=""
              >
                <option value="Refeições">Refeições</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </div>
          </div>

          <div>
            <div>
              <span>Ingredientes</span>

              <div>
                {ingredients &&
                  ingredients.map((tag, index) => (
                    <NewTag
                      onClick={() => handleClickRemoveIngredients(tag)}
                      key={String(index)}
                      value={tag}
                    />
                  ))}
                <NewTag
                  value={newingredients}
                  onChange={(e) => setNewIngredients(e.target.value)}
                  onClick={handleClickNewIngredients}
                  isnew="true"
                  placeholder="Adicionar"
                />
              </div>
            </div>
            <div>
              <span>Preço</span>
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="R$00.00"
              />

            </div>
          </div>

          <div>
            <span>Descrição</span>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button onClick={(e) => handleNewDish(e)} type="submit">
            Salvar Alterações
          </button>
        </form>
      </Content>
      <Footer />
    </Container>
  );
}
