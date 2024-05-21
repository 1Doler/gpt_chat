import React from "react";

import cl from "./Wrapper.module.scss";
import {classNames} from "../../utils";

enum ColorWrapper {
    Default = "default",
    Light = "light",
    Dark = "dark"
}
interface WrapperProps {
    color?: ColorWrapper;
    border?: boolean;
    className?: string;
    children: React.ReactNode;
}

const Wrapper = (props: WrapperProps) => {
    const {
        color= ColorWrapper.Default, children,
        className,
        border = false
    } = props;
    return (
        <div className={classNames(cl.wrapper, {[cl.border]: border}, [className, cl[color]])}>
            {children}
        </div>
    );
}

export default Wrapper;
