import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Article } from "../../components/Article";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { PiPencilSimpleBold } from "react-icons/pi";
import { toast } from 'react-toastify';
import { Loading } from "../../components/Loading"
export function Home() {
  const navigate = useNavigate();

  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [infoTitle, setinfoTitle] = useState("");
  const [defaultData, setdefaultData] = useState([]);
  const [requests, setRequests] = useState([]);

  const localhostImg = `${api.defaults.baseURL}files/`;

  function buttonEditDish(id) {
    navigate(`/editdish/${id}`);
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  const toggleHeart = (item) => {
    // Verifique se o item já está na lista de favoritos

    const storedFavorites =
      JSON.parse(localStorage.getItem("@FavoritesFoodExplorer")) || [];

    // Verifique se o item atual já está na lista de favoritos com base na propriedade id
    const isFavorite = storedFavorites.some(
      (favItem) => favItem.id === item.id
    );

    if (isFavorite) {
      // Se estiver na lista, remova-o
      const updatedFavorites = storedFavorites.filter(
        (searchItem) => searchItem.id !== item.id
      );
      setFavoriteItems(updatedFavorites);
      // Atualize o localStorage
      localStorage.setItem(
        "@FavoritesFoodExplorer",
        JSON.stringify(updatedFavorites)
      );
      toast.error("removido dos Favoritos", {
        icon: "🤍", theme: "light", autoClose: 400,
        pauseOnHover: false,
        position: "bottom-right"
      });
    } else {
      toast.success("adicionado(a) aos Favoritos", {
        icon: "❤️", theme: "light", autoClose: 500,
        pauseOnHover: false, position: "bottom-right"
      });
      // Se não estiver na lista, adicione-o
      const updatedFavorites = [item, ...storedFavorites];
      setFavoriteItems(updatedFavorites);
      // Atualize o localStorage
      localStorage.setItem(
        "@FavoritesFoodExplorer",
        JSON.stringify(updatedFavorites)
      );
    }
  };

  function handleSearch(term) {
    setinfoTitle(term);
  }

  function cartItem(setReq, quantity) {
    setReq[0].quantity = quantity
    let DadosOld = JSON.parse(localStorage.getItem("@foodrequests")) || [];
    const haveData = DadosOld.some(itemFind => itemFind.id === setReq[0].id)
    if (!haveData) {
      const updated = [setReq[0], ...DadosOld]
      localStorage.setItem("@foodrequests", JSON.stringify(updated))
      setRequests(PrevState => [setReq[0], ...PrevState])
      toast.success(`${`${quantity === 1 ? "prato adicionado com sucesso" : `prato adicionado com ${quantity} itens`}`}`, {
        theme: "light", autoClose: 800,
        pauseOnHover: false,
        position: "bottom-right"
      });

    } else {
      const Updated = DadosOld.map(newData => {
        if (newData.id === setReq[0].id) {
          return { ...newData, quantity: newData.quantity + quantity }
        }
        return newData
      })
      setRequests(Updated)
      localStorage.setItem("@foodrequests", JSON.stringify(Updated))
      toast.success(`+${quantity} itens adicionado`, {
        theme: "light", autoClose: 500,
        pauseOnHover: false,
        position: "bottom-right"
      });
    }

  }

  function handleQuantityChange(itemId, newQuantity) {
    const filterItem = defaultData.filter((item) => item.id === itemId)[0]
      .price;

    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === itemId) {
          // Encontrou o item com o id desejado, atualize o price
          return { ...item, price: Number(filterItem) * newQuantity };
        } else {
          // Mantenha os outros itens inalterados
          return item;
        }
      });
    });
  }
  useEffect(() => {
    async function fechDish() {
      const response = await api.get(
        `/dish/?title=${infoTitle}&ingredients=${[]}`
      );
      setData(response.data);
      setdefaultData(response.data);
    }
    fechDish();
  }, [infoTitle]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("@FavoritesFoodExplorer")
    );
    if (storedFavorites) {
      setFavoriteItems(storedFavorites);
    }
  }, []);


  return (
    <Container>
      <Header
        onRequests={requests}
        onFavorites={favoriteItems}
        onSearch={handleSearch}
      />
      <Banner />
      {data && data.length === 0 ? <Loading /> : <Content>
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
                  <SwiperSlide key={String(item.id)} className="card">
                    {user && user.isAdmin ? (
                      <button
                        onClick={() => buttonEditDish(item.id)}
                        className="btn-fav-edit"
                      >
                        <PiPencilSimpleBold size={30} />
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleHeart(item)}
                        className="btn-fav-edit"
                      >
                        {favoriteItems.some(
                          (favItem) => favItem.id === item.id
                        ) ? (
                          <AiFillHeart size={30} />
                        ) : (
                          <AiOutlineHeart size={30} />
                        )}
                      </button>
                    )}

                    <div className="showdish">
                      <div className="dish">
                        <img src={`${localhostImg}${item.imgurl}`} alt="" />
                      </div>
                      <button onClick={() => handleDetails(item.id)} className="btn-showdish">{item.name} &gt;</button>
                      <p>{item.description}</p>
                      <span>R${item.price}</span>
                    </div>
                    {user.isAdmin ? null : (
                      <Button
                        cartItem={cartItem}
                        setReq={defaultData.filter((res) => res.id === item.id)}
                        itemInfo={item}
                        onChangeQuantity={handleQuantityChange}
                      />
                    )}
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
                    {user && user.isAdmin ? (
                      <button
                        onClick={() => buttonEditDish(item.id)}
                        className="btn-fav-edit"
                      >
                        <PiPencilSimpleBold size={30} />
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleHeart(item)}
                        className="btn-fav-edit"
                      >
                        {favoriteItems.some(
                          (favItem) => favItem.id === item.id
                        ) ? (
                          <AiFillHeart size={30} />
                        ) : (
                          <AiOutlineHeart size={30} />
                        )}
                      </button>
                    )}

                    <div className="showdish">
                      <div className="dish">
                        <img src={`${localhostImg}${item.imgurl}`} alt="" />
                      </div>
                      <button onClick={() => handleDetails(item.id)} className="btn-showdish">{item.name} &gt;</button>
                      <p>{item.description}</p>
                      <span>R${item.price}</span>
                    </div>
                    {user.isAdmin ? null : (
                      <Button
                        cartItem={cartItem}
                        setReq={defaultData.filter((res) => res.id === item.id)}
                        itemInfo={item}
                        onChangeQuantity={handleQuantityChange}
                      />
                    )}
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
                    {user && user.isAdmin ? (
                      <button
                        onClick={() => buttonEditDish(item.id)}
                        className="btn-fav-edit"
                      >
                        <PiPencilSimpleBold size={30} />
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleHeart(item)}
                        className="btn-fav-edit"
                      >
                        {favoriteItems.some(
                          (favItem) => favItem.id === item.id
                        ) ? (
                          <AiFillHeart size={30} />
                        ) : (
                          <AiOutlineHeart size={30} />
                        )}
                      </button>
                    )}

                    <div className="showdish">
                      <div className="dish">
                        <img src={`${localhostImg}${item.imgurl}`} alt="" />
                      </div>
                      <button onClick={() => handleDetails(item.id)} className="btn-showdish">{item.name} &gt;</button>
                      <p>{item.description}</p>
                      <span>R${item.price}</span>
                    </div>
                    {user.isAdmin ? null : (
                      <Button
                        cartItem={cartItem}
                        setReq={defaultData.filter((res) => res.id === item.id)}
                        itemInfo={item}
                        onChangeQuantity={handleQuantityChange}
                      />
                    )}
                  </SwiperSlide>
                ))}
            </Swiper>
          </Article>
        )}
      </Content>}
      <Footer />
    </Container>
  );
}
