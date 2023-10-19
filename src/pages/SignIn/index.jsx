import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import FoodExplorer from "../../assets/Polygon1.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { toast } from "react-toastify";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {signIn, loading} = useAuth();

  async function handleSignIn(event) {
    event.preventDefault();
    if (!email || !password) {
      return toast.warning("Preencha E-mail e Senha", {
        autoClose: 1200,
        pauseOnHover: false,
      });
    }

   

    const statusToast = toast.promise(signIn({ email, password }), {pending: {
      render(){
        return 'Verificando usuario, aguarde...'
      }, theme: 'dark'
    }, });
      
    
    toast.dismiss(statusToast)
   
  }

  return (
    <Container>
      <div>
        <img src={FoodExplorer} alt="" />
        <span>food explorer</span>
      </div>

      <Form>
        <h1>Faça Login</h1>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="emailInput"
          title="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="passwordInput"
          title="Senha"
          placeholder="No mínimo 6 caracteres"
        />
        <button
          disabled={loading}
          className={loading ? "disabled" : ""}
          onClick={(e) => handleSignIn(e)}
          type="submit"
        >
          {loading ? (
            <ThreeDots
              height="24"
              width="40"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Entrar"
          )}
        </button>
        <Link to="/cadastro">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
