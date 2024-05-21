import { Login, Chat } from "../pages";
import { RouteProps } from 'react-router-dom';

export enum AppRouters {
    Chat = "chat",
    Auth = "auth"
}

export const RoutePath = {
    [AppRouters.Chat]: "/",
    [AppRouters.Auth]: "/auth"
}

export const routeConfig: Record<AppRouters, RouteProps> ={
    [AppRouters.Chat]: {
        path: RoutePath[AppRouters.Chat],
        element: <Chat />
    },
    [AppRouters.Auth]: {
        path: RoutePath[AppRouters.Auth],
        element: <Login />
    }
}
