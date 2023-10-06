import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";


export function Details() {

  const params = useParams()

  const navigate = useNavigate()

  const [data, setData] = useState("")


  function ButtonBack(event){
    event.preventDefault()
    navigate(-1)
 
  }

  useEffect(()=> {
    async function fetchDetails(){
   
      const response = await api.get(`/dish/${params.id}`)
      setData(response.data)
      
    }

    fetchDetails()

  }, [])


  return (
    <Container>
      <Header />
      {data && <Content>
        <div className="box-btn-back">
          <button type="button" onClick={(e)=> ButtonBack(e)}>
            <MdArrowBackIos />
            voltar
          </button>
        </div>

        <div className="dish">
          <div>
            <img src={`${api.defaults.baseURL}files/${data.dish.imgurl}`} alt="" />
          </div>

          <div>
            <h1>{data.dish.name}</h1>
            <p>
              {data.dish.description}
            </p>
            {(data.ingredients.length > 0) && <div className="tags-food">
             {data.ingredients.map(item=> {
              return (
                <span key={String(item.id)}>{item.name}</span>
              )
             })}

            </div>}

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
      </Content>}

      <Footer />
    </Container>
  );
}
