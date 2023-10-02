import { createContext, useContext } from "react";
import { api } from "../services/api";
import { useState, useEffect } from "react";

const DishContext = createContext({});

function DishProvider({ children }) {
  const [data, setData] = useState(null);

  
  return (
    <DishContext.Provider value={{  }}>
      {children}
    </DishContext.Provider>
  );
}

function useDish() {
  const context = useContext(DishContext);
  return context;
}

export { DishProvider, useDish };
