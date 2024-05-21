import React, { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

import cl from "./Button.module.scss";
import {classNames} from "../../../utils";

export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    color?: "primary" | "ghost" | "dark";
    size?: "small" | "large";
    form?: "circle" | "square";
    animation?: boolean;
    children: ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  color = "primary",
  className,
  size = "large",
  form = "square",
  children,
  ...props
}) => {
    return (
        <button
            className={classNames(
                cl.button,
                {},
                [
                    cl[color],
                    cl[form],
                    cl[size],
                    className
                ]
            )}
            {...props}
        >
            {children}
        </button>
    )
};

export default Button
