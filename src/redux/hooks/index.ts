import { useSelector } from "react-redux";
import { RootState } from "../store/";

export const useStorage = () => {
  const { authReducer } = useSelector((state: RootState) => state.root);
  return {
    ...authReducer,
  };
};
