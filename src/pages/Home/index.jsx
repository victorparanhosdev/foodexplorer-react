import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Article } from "../../components/Article";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { PiPencilSimpleBold } from "react-icons/pi"
export function Home() {
  const navigate = useNavigate()

  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [infoTitle, setinfoTitle] = useState("");


  const localhostImg = `${api.defaults.baseURL}files/`


  useEffect(() => {
    async function fechDish() {
      const response = await api.get(`/dish/?title=${infoTitle}&ingredients=${[]}`);
      setData(response.data);
    }
    fechDish();





  }, [infoTitle]);


  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("@FavoritesFoodExplorer"))
    if (storedFavorites) {
      setFavoriteItems(storedFavorites);
    }

  }, [])


  function buttonEditDish(id) {
    navigate(`/editdish/${id}`)
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  const toggleHeart = (item) => {
    // Verifique se o item já está na lista de favoritos
    const storedFavorites = JSON.parse(localStorage.getItem("@FavoritesFoodExplorer")) || [];

    // Verifique se o item atual já está na lista de favoritos com base na propriedade id
    const isFavorite = storedFavorites.some((favItem) => favItem.id === item.id);

    if (isFavorite) {
      // Se estiver na lista, remova-o
      const updatedFavorites = storedFavorites.filter((searchItem) => searchItem.id !== item.id);
      setFavoriteItems(updatedFavorites);
      // Atualize o localStorage
      localStorage.setItem("@FavoritesFoodExplorer", JSON.stringify(updatedFavorites));
    } else {
      // Se não estiver na lista, adicione-o
      const updatedFavorites = [item, ...storedFavorites];
      setFavoriteItems(updatedFavorites);
      // Atualize o localStorage
      localStorage.setItem("@FavoritesFoodExplorer", JSON.stringify(updatedFavorites));
    }
  };
  function handleSearch(term) {
    setinfoTitle(term);

  }


  return (
    <Container>
      <Header onSearch={handleSearch} />
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
                  {user && user.isAdmin ? <button onClick={() => buttonEditDish(item.id)} className="btn-fav-edit"><PiPencilSimpleBold size={30} /></button> :
                    <button onClick={() => toggleHeart(item)} className="btn-fav-edit">{favoriteItems.some((favItem) => favItem.id === item.id) ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}</button>}

                  <button onClick={() => handleDetails(item.id)} className="showdish">
                    <div className="dish">
                      <img src={`${localhostImg}${item.imgurl}`} alt="" />
                    </div>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <span>R${item.price}</span>
                  </button>
                  {user.isAdmin ? null : <Button />}
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
                    {user && user.isAdmin ? <button onClick={() => buttonEditDish(item.id)} className="btn-fav-edit"><PiPencilSimpleBold size={30} /></button> :
                      <button onClick={() => toggleHeart(item)} className="btn-fav-edit">{favoriteItems.some((favItem) => favItem.id === item.id) ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}</button>}

                    <button onClick={() => handleDetails(item.id)} className="showdish">
                      <div className="dish">
                        <img src={`${localhostImg}${item.imgurl}`} alt="" />
                      </div>
                      <h1>{item.name}</h1>
                      <p>{item.description}</p>
                      <span>R${item.price}</span>
                    </button>
                    {user.isAdmin ? null : <Button />}
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
                    {user && user.isAdmin ? <button onClick={() => buttonEditDish(item.id)} className="btn-fav-edit"><PiPencilSimpleBold size={30} /></button> :
                      <button onClick={() => toggleHeart(item)} className="btn-fav-edit">{favoriteItems.some((favItem) => favItem.id === item.id) ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}</button>}

                    <button onClick={() => handleDetails(item.id)} className="showdish">
                      <div className="dish">
                        <img src={`${localhostImg}${item.imgurl}`} alt="" />
                      </div>
                      <h1>{item.name}</h1>
                      <p>{item.description}</p>
                      <span>R${item.price}</span>
                    </button>
                    {user.isAdmin ? null : <Button />}
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
