import { createContext, useContext } from "react";
import { api } from "../services/api"

const AuthContext = createContext({})


function AuthProvider({children}) {


    async function signIn({email, password}){

        try{
            const usuario = await api.post("/sessions", {email, password})
            console.log(usuario.data)
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else {
                alert("Error no servidor", error)
            }
           
        }

    
    }

    return(
       <AuthContext.Provider value={{signIn}}>
        {children}
       </AuthContext.Provider>
    )

}


function useAuth(){
    const context = useContext(AuthContext)
    return context
}


export {
    AuthProvider,
    useAuth
}