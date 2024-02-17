import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const GetAuth = () => {

    const auth = useContext(AuthContext);
    return auth;
};

export default GetAuth;
 
