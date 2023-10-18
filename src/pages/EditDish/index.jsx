import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { LuUpload } from "react-icons/lu";
import { useState, useEffect } from "react";
import { NewTag } from "../../components/NewTag";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { Loading } from "../../components/Loading";
export function EditDish() {
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState("");
  const [stateingredients, setIngredients] = useState([]);

  const [newingredients, setNewIngredients] = useState("");
  const [file, setFile] = useState(null);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);

  function removeItem(valueName) {
    const updated = stateingredients.filter(name => name !== valueName);
    setIngredients(updated)


  }
  async function SalvedEdit() {

    const editDish = {
      name, category, ingredients: stateingredients, price, description
    }
    const formData = new FormData();


    if (file) {
      formData.append("patchImg", file)
      api.patch(`/dish/${params.id}/`, formData)
    }

    const stateToast = toast.promise(
      api.put(`/dish/${params.id}`, editDish),
      {
        pending: "Atualizando prato...", // Mensagem exibida durante o carregamento
      }
    );

    try {

      await stateToast
      toast.dismiss(stateToast)
      toast.success("Prato editado com sucesso!!", {
        autoClose: 500,
        pauseOnHover: false
      })
      navigate("/")

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message, {
          autoClose: 500,
          pauseOnHover: false
        })
      } else {
        toast.error("error internal", {
          autoClose: 500,
          pauseOnHover: false
        })
      }

    }





  }


  async function ExcluirEdit() {
    const isOk = confirm("Tem certeza que deseja excluir ?")

    if (isOk) {


      const stateToast = toast.promise(
        api.delete(`/dish/${params.id}`),
        {
          pending: "Excluindo prato...", // Mensagem exibida durante o carregamento
        }
      );

      try {
        await stateToast
        toast.dismiss(stateToast)
        toast.error("Prato excluido com sucesso", { icon: "🗑️", theme: "light", autoClose: 600, pauseOnHover: false })
        navigate("/");


      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message, { theme: "light", autoClose: 1200, pauseOnHover: false })
        } else {
          toast.error("Error Internal", { theme: "light", autoClose: 600, pauseOnHover: false })
        }

      }





    }







  }

  function handleClickNewIngredients() {
    if (newingredients === "") {
      return toast.warning("Não aceitamos ingrediente vazio", { theme: "light", autoClose: 600, pauseOnHover: false });
    }

    setIngredients((prevState) => [...prevState, newingredients]);

    document.querySelector(".btn-add").value = "";
    setNewIngredients("")
  }
  function ButtonBack(event) {
    event.preventDefault();
    navigate(-1);
  }

  useEffect(() => {
    async function fetchEditDish() {
      const response = await api.get(`/dish/${params.id}`);
      setData(response.data);
      setIngredients(response.data.ingredients.map(item => item.name))
    }

    fetchEditDish();
  }, []);



  return (
    <Container>
      <Header />

      {data && data.length === 0 ? <Loading /> : (
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
                  {file ? file.name : data.imgurl}
                </label>
                <input onChange={e => setFile(e.target.files[0])} type="file" id="form-controls" />
              </div>

              <div>
                <span>Nome</span>
                <input onChange={e => setName(e.target.value)}
                  type="text"
                  defaultValue={data.name}
                  placeholder="Ex.: Salada Ceasar"
                />
              </div>

              <div>
                <span>Categoria</span>
                <select onChange={e => setCategory(e.target.value)} name="" id="" defaultValue={data.category}>
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
                  {stateingredients.map((name, index) => {
                    return (
                      <NewTag onClick={() => removeItem(name)} key={String(index)} value={name} />
                    )
                  })}


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
                <input onChange={(e) => setPrice(e.target.value)} type="number" defaultValue={data.price} placeholder="R$00.00" />
              </div>
            </div>

            <div>
              <span>Descrição</span>
              <textarea onChange={(e) => setDescription(e.target.value)}
                defaultValue={data.description}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div>
              <button onClick={ExcluirEdit} type="button">Excluir prato</button>
              <button onClick={SalvedEdit} type="button">Salvar Alterações</button>
            </div>
          </form>
        </Content>
      )}
      <Footer />
    </Container>
  );
}
