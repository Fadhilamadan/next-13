import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const restMovies = async () => {
  const { data } = await axios.get(
    `https://cc050006-4a12-4d33-b28c-f11ab6dbc1f4.mock.pstmn.io/lists`
  );
  return data;
};

export const useMovies = () => {
  return useQuery(["useMovies"], () => restMovies());
};
