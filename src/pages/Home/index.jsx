import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import { FiHeart } from "react-icons/fi"
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Footer } from "../../components/Footer";
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
export function Home() {
    return (
        <Container>
            <Header />
            <Banner />
            <Section title="Refeições">
                <Swiper className="card-principal" modules={[Navigation, EffectFade]} navigation slidesPerView={'auto'} spaceBetween={27}>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-1.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-2.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Massa fresca com camarões e pesto. </p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-3.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-4.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-5.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-6.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-7.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Section>
            <Section title="Sobremesas">
                <Swiper className="card-principal" modules={[Navigation, EffectFade]} navigation slidesPerView={'auto'} spaceBetween={27}>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-8.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-9.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-10.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-11.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-1.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-2.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Section>
            <Section title="Bebidas">
                <Swiper className="card-principal" modules={[Navigation, EffectFade]} navigation slidesPerView={'auto'} spaceBetween={27}>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-3.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-4.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-8.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-9.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-10.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-5.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="card">
                        <div className="dish"><img src="/src/assets/Mask group-1.png" alt="" /><FiHeart size={24} /></div>
                        <h1>Spaguetti Gambe</h1>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <span>R$79,90</span>
                        <div>
                            <div>
                                <button>
                                    <FiMinus />
                                </button>
                                <input
                                    type="text"
                                    value={0}
                                    readOnly
                                />
                                <button >
                                    <FiPlus />
                                </button>
                            </div>
                            <button className="btn-incluir" type="button">incluir</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Section>
            <Footer />


        </Container>
    )
}