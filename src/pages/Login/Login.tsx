import cl from "./Login.module.scss";
import {Wrapper} from "../../components";
import {Signin} from "./Signin/Signin.tsx";

const Login = () => {
    return (
        <div className={cl.login}>
            <Wrapper border={true}>
                <Signin className={cl.signin}/>
            </Wrapper>
        </div>
    );
};

export default Login;
