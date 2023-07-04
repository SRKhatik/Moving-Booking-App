import axios from "axios";
import { TOKEN } from "../utils/constants";

const BASE_URL = import.meta.env.VITE_MBA_BACKEND_URL;

export const getAllMovies = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/mba/api/v1/movies`, {
      headers: {
        "x-access-token": localStorage.getItem(TOKEN),
      },
    });

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieById = async (id) => {
 
  try {
    const res = await axios.get(`${BASE_URL}/mba/api/v1/movies/${id}`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),

      },
    });

    return res;
  } catch (err) {
    throw new Error("internal Error");
    console.log(err);
  }
};
