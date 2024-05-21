import cl from "./Signin.module.scss";
import {classNames} from "../../../utils";
import {useForm} from "react-hook-form";
import Input from "../../../components/UI/Input/Input.tsx";
import Button from "../../../components/UI/Button/Button.tsx";
import {useContext} from "react";
import {AuthContextStateType, Context } from "../../../Context.tsx";

type SigninProps = {
    className: string
};

export type Inputs = {
    email: string;
    password: string;
};

export const Signin = (props: SigninProps) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const [ auth, setAuth ] = useContext(Context) as AuthContextStateType;

    const onSubmit = (data: Inputs) => {
        console.log(data);
        setAuth(() => ({ validAuth: false }));
    };

    return (
        <div className={classNames(cl.signin, {}, [props.className])}>
            <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
                <p className={cl.title}>Авторизация</p>
                <Input
                    placeholder="e-mail"
                    className={cl.email}
                    value={watch("email")}
                    {...register("email", {
                        required: {value: true, message: "Заполните email"},
                    })}
                    error={errors.email}
                />
                <Input
                    placeholder="password"
                    className={cl.password}
                    value={watch("password")}
                    type={"password"}
                    {...register("password", {
                        required: {value: true, message: "Заполните пароль"},
                    })}
                    error={errors.password}
                />
                {auth.validAuth === false && (
                    <p className={cl.error}>*Неверный логин или пароль</p>
                )}
                <Button type="submit">Войти</Button>
            </form>
        </div>
    );
};
