import { createContext, useContext } from "react";
import { api } from "../services/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify"
const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)

  async function signIn({ email, password }) {
    try {
      setLoading(true)
      const usuario = await api.post("/sessions", { email, password });
      const { token, user } = usuario.data;

      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token,
      };

      setData(userData);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("@UserFoodExplorer:", JSON.stringify(userData));
      toast.success(`Seja bem-vindo(a) ${user.name}`, {
        autoClose: 1500,
        pauseOnHover: false
      });
      setLoading(false)

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message, {
          autoClose: 2000,
          pauseOnHover: false
        });
      } else {
        toast.error("Não foi possivel Entrar", {
          autoClose: 1200,
          pauseOnHover: false
        })
      }
      setLoading(false)
    }
  }

  function signOut() {
    localStorage.removeItem("@foodrequests:");
    localStorage.removeItem("@UserFoodExplorer:");
    localStorage.removeItem("@FavoritesFoodExplorer");
    setData(null);
  }

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("@UserFoodExplorer:"));

    if (dados) {
      api.defaults.headers.common["Authorization"] = `Bearer ${dados.token}`;
      setData(dados);
    }


  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data, signOut, loading}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
