import { FieldError } from "react-hook-form";
import {
    DetailedHTMLProps,
    ForwardedRef,
    forwardRef,
    memo,
    InputHTMLAttributes
} from "react";

import { classNames } from "../../../utils";
import cl from "./Input.module.scss";

interface InputProps extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> {
    error?: FieldError & { type: string };
    value: string;
}

const Input = memo(
    forwardRef(
        (
            { value, error, className, placeholder, ...props }: InputProps,
            ref: ForwardedRef<HTMLInputElement>
        ) => {
            return (
                <div className={cl.wrapper}>
                    <input className={classNames(cl.input, {}, [className])} {...props} ref={ref} />
                    <p className={classNames(cl.label, { [cl.filled]: value })}>
                        { placeholder }
                    </p>
                    {error && <p className={cl.errorMessage}>*{error.message}</p>}
                </div>
            );
        }
    )
);

export default Input;
