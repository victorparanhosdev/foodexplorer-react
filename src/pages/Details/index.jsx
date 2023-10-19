import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { toast } from "react-toastify";
import { Loading } from "../../components/Loading";

export function Details() {
  const { user } = useAuth();
  const params = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [defaultData, setdefaultData] = useState([]);
  const [requests, setRequests] = useState([]);

  function handleEditDish() {
    navigate(`/editdish/${params.id}`);
  }

  function cartItem() {
    const DadosOld = JSON.parse(localStorage.getItem("@foodrequests")) || [];
    const HaveItem = DadosOld.some((item) => item.id === Number(params.id));

    if (!HaveItem) {
      const newData = {
        ...defaultData,
        quantity,
      };
      const newArray = [newData, ...DadosOld];
      localStorage.setItem("@foodrequests", JSON.stringify(newArray));
      setRequests((prevState) => [...prevState, newData]);
      toast.success(
        `${`${
          quantity === 1
            ? "prato adicionado com sucesso"
            : `prato adicionadocom ${quantity} itens`
        }`}`,
        {
          theme: "light",
          autoClose: 800,
          pauseOnHover: false,
          position: "bottom-right",
        }
      );
    } else {
      const newArray = DadosOld.map((newItem) => {
        if (newItem.id === Number(params.id)) {
          return { ...newItem, quantity: newItem.quantity + quantity };
        }
        return newItem;
      });

      localStorage.setItem("@foodrequests", JSON.stringify(newArray));
      setRequests(newArray);
      toast.success(`+${quantity} itens adicionado`, {
        theme: "light",
        autoClose: 500,
        pauseOnHover: false,
        position: "bottom-right",
      });
    }
  }

  function ButtonBack(event) {
    event.preventDefault();
    navigate(-1);
  }

  function minusButton() {
    if (quantity < 2) {
      return;
    }
    setQuantity(quantity - 1);
  }

  function maxButton() {
    setQuantity(quantity + 1);
  }

  async function fetchDetails() {
    try {
      const response = await api.get(`/dish/${params.id}`);
      setData(response.data);
      setdefaultData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container>
      <Header onRequests={requests} />

      {data && data.length === 0 ? (
        <Loading />
      ) : (
        <Content>
          <div className="box-btn-back">
            <button type="button" onClick={(e) => ButtonBack(e)}>
              <MdArrowBackIos />
              voltar
            </button>
          </div>

          <div className="dish">
            <div>
              <img src={`${api.defaults.baseURL}files/${data.imgurl}`} alt="" />
            </div>

            <div>
              <h1>{data.name}</h1>
              <p>{data.description}</p>

              {data.ingredients.length > 0 && (
                <div className="tags-food">
                  {data.ingredients.map((item) => {
                    return <span key={String(item.id)}>{item.name}</span>;
                  })}
                </div>
              )}

              <div className="box-incluir">
                {user.isAdmin ? (
                  <button
                    onClick={handleEditDish}
                    className="btn-incluir"
                    type="button"
                  >
                    Editar prato
                  </button>
                ) : (
                  <>
                    <div>
                      <button onClick={minusButton} type="button">
                        <FiMinus size={24} />
                      </button>
                      <input
                        type="text"
                        value={String(quantity).padStart(2, "0")}
                        readOnly
                      />
                      <button onClick={maxButton} type="button">
                        <FiPlus size={24} />
                      </button>
                    </div>
                    <button
                      onClick={cartItem}
                      className="btn-incluir"
                      type="button"
                    >
                      incluir • R${Number(data.price) * quantity}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Content>
      )}

      <Footer />
    </Container>
  );
}
