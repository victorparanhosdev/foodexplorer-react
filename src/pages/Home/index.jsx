import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Article } from "../../components/Article";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { FiHeart } from "react-icons/fi";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {
  const { user } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function handleDish() {
      try {
        const response = await api.get(`/dish/?title=${""}&ingredients=${[]}`);
        setData(response.data);
      } catch (error) {}
    }

    handleDish();
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
              {data
                .filter((item) => item.category === "Refeições")
                .map((item, index) => (
                  <SwiperSlide className="card">
                    <div className="dish">
                      <img src="/src/assets/Mask group-1.png" alt="" />
                      <FiHeart size={24} />
                    </div>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <span>{item.price}</span>
                    <Button />
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
                  <SwiperSlide className="card">
                    <div className="dish">
                      <img src="/src/assets/Mask group-1.png" alt="" />
                      <FiHeart size={24} />
                    </div>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <span>{item.price}</span>
                    <Button />
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
                  <SwiperSlide className="card">
                    <div className="dish">
                      <img src="/src/assets/Mask group-1.png" alt="" />
                      <FiHeart size={24} />
                    </div>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <span>{item.price}</span>
                    <Button />
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
