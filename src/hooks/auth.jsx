import { createContext, useContext } from "react";
import { api } from "../services/api";
import { useState, useEffect } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState(null);

  async function signIn({ email, password }) {
    try {
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
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel Entrar")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@UserFoodExplorer:");
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
    <AuthContext.Provider value={{ signIn, user: data, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
