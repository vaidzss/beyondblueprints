import { createContext, useContext } from "react";

export const LoadingContext = createContext({ loading: false });

export const useLoading = () => useContext(LoadingContext);
