import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Article } from "../../components/Article";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";

import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import {PiPencilSimpleBold} from "react-icons/pi"
export function Home() {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const localhostImg = `${api.defaults.baseURL}files/`

  useEffect(() => {
    async function fechDish() {
        const response = await api.get(`/dish/?title=${""}&ingredients=${[]}`);
        setData(response.data);
    }


    fechDish();
  }, []);




  return (
    <Container>
      <Header />
      <Banner />
      <Content>
        {data.some((item) => item.category === "Refeições") && (
          <Article title="Refeições">
            <Swiper
              className="card-principal"
              modules={[Navigation, EffectFade]}
              navigation
              slidesPerView={"auto"}
              spaceBetween={27}
            >
              {data.filter((item) => item.category === "Refeições").map((item, index) => (


                  <SwiperSlide key={String(item.id)} className="card">
                    <button className="btn-fav-edit"><AiFillHeart size={24} /><AiOutlineHeart size={24} /><PiPencilSimpleBold size={24}/></button>               
                    <button className="showdish">
                    <div className="dish">
                      <img src={`${localhostImg}${item.imgurl}`} alt="" />
                    </div>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <span>R${item.price}</span>
                    </button>
                    {user.isAdmin ? null: <Button />} 
                  </SwiperSlide>
                ))}
            </Swiper>
          </Article>
        )}
          {data.some((item) => item.category === "Sobremesas") && (
          <Article title="Sobremesas">
            <Swiper
              className="card-principal"
              modules={[Navigation, EffectFade]}
              navigation
              slidesPerView={"auto"}
              spaceBetween={27}
            >
              {data
                .filter((item) => item.category === "Sobremesas")
                .map((item, index) => (
                  <SwiperSlide key={String(item.id)} className="card">
                  <button className="btn-fav-edit"><AiFillHeart size={24} /><AiOutlineHeart size={24} /><PiPencilSimpleBold size={24}/></button>               
                  <button className="showdish">
                  <div className="dish">
                    <img src={`${localhostImg}${item.imgurl}`} alt="" />
                  </div>
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  <span>R${item.price}</span>
                  </button>
                  {user.isAdmin ? null: <Button />} 
                </SwiperSlide>
                ))}
            </Swiper>
          </Article>
        )}
          {data.some((item) => item.category === "Bebidas") && (
          <Article title="Bebidas">
            <Swiper
              className="card-principal"
              modules={[Navigation, EffectFade]}
              navigation
              slidesPerView={"auto"}
              spaceBetween={27}
            >
              {data
                .filter((item) => item.category === "Bebidas")
                .map((item, index) => (
                  <SwiperSlide key={String(item.id)} className="card">
                  <button className="btn-fav-edit"><AiFillHeart size={24} /><AiOutlineHeart size={24} /><PiPencilSimpleBold size={24}/></button>               
                  <button className="showdish">
                  <div className="dish">
                    <img src={`${localhostImg}${item.imgurl}`} alt="" />
                  </div>
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  <span>R${item.price}</span>
                  </button>
                  {user.isAdmin ? null: <Button />} 
                </SwiperSlide>
                ))}
            </Swiper>
          </Article>
        )}


      </Content>
      <Footer />
    </Container>
  );
}
