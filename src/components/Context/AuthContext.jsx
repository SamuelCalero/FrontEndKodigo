import { createContext, useContext,useState } from "react";
import axios from "../api/axios";
import { Navigate, useNavigate } from "react-router-dom";
const AuthContext = createContext({});

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const [errors,setErrors]=useState([])
    const navigate = useNavigate()

    const csrf=()=> axios.get('/sanctum/csrf-cookie')

    const login = async({...data})=>{
        await csrf();
        try {
            const response =await axios.post('/api/login',data)
            setTimeout(() => {
                setUser(response.data.user);
                setTimeout(()=>{
                    if(response.data.user.rol==='user'){
                        navigate("/HomeUser")
                    }else{
                        navigate("/HomeAdmin")
                    }
                },800);
                
              }, 800);

        } catch (e) {
            console.log("se salio")
            setErrors(e.response.data.message);
        }
    }
    const register = async({...data})=>{
        await csrf();
        try {
            await axios.post('/api/register',data);
            navigate("/")
        } catch (e) {
            console.log(e.response)
            if(e.response.status===422){
                setErrors(e.response.data.errors);
            }
        }
    }
    const logout=()=>{
            setUser(null);
            navigate('/')
    }
    return <AuthContext.Provider value={{user,errors,login,register,logout}}>
        {children}
    </AuthContext.Provider>
}
export default function useAuthContext(){
    return useContext(AuthContext);
}