import axios from "axios";
import { create } from "zustand";
import { API_KEY } from "../api/Api";
import { Api } from "@mui/icons-material";

export const useMoviesStore = create((set) => ({
  movies: [],
  img: [],
  MoviesActor: [],
  moviesTrending: [],
  moviesTopReiting: [],
  detail: [],
  treilers: [],
  DetailActor: [],
  actor: [],
  allMovies: [],
  loading: false,
  search: [],

  tv: [],
  loader: false,

  getImg: async () => {
    set({ loading: true });
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=11`
    );
    set({ img: data.results, loading: false });
  },
  getPopular: async (value, pages = 1) => {
    set({ loading: true });
    let allResults = [];
    for (let page = 1; page <= pages; page++) {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/${
          value ? "movie" : "tv"
        }/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      );
      allResults = allResults.concat(data.results);
    }
    set({ movies: allResults, loading: false });
  },
  getTrending: async (value) => {
    set({ loading: true });
    let { data } =
      await axios.get(`https://api.themoviedb.org/3/trending/movie/${
        value ? "day" : "week"
      }
?api_key=${API_KEY}`);
    set({ moviesTrending: data.results, loading: false });
  },
  getTopReiting: async (value) => {
    set({ loading: true });
    let { data } = await axios.get(
      ` https://api.themoviedb.org/3/${
        value ? "movie" : "tv"
      }/popular?api_key=${API_KEY}&language=en-US&page=15`
    );
    set({ moviesTopReiting: data.results, loading: false });
  },

  getDetail: async (id) => {
    try {
      set({ loading: true });
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );

      set({ detail: data, loading: false });
    } catch (error) {
      console.error(error.message);
    }
  },
  getActors: async (id) => {
    set({ loading: true });
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    set({ MoviesActor: data.cast, loading: false });
  },
  getTreilers: async (id) => {
    try {
      set({ loading: true });
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      set({ treilers: data.results, loading: false });
    } catch (error) {
      console.log(error.message);
      set({ treilers: [], loading: false });
    }
  },
  getDetailActors: async (id) => {
    set({ loading: true });
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
    );
    set({ DetailActor: data, loading: false });
  },
  getActor: async (id) => {
    set({ loading: true });
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`
    );
    set({ actor: data.cast, loading: false });
  },
  getSearch: async (name) => {
    set({ loading: true });
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}`
    );
    set({ search: data.results, loading: false });
  },
  getAllMovies: async (value) => {
    set({ loader: true });
    try {
      let allResults = [];
      for (let page = 1; page <= 50; page++) {
        let { data } = await axios(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${value}`
        );
        allResults = allResults.concat(data.results);
      }
      set({ allMovies: allResults, loader: false });
    } catch (error) {
      console.error("getAllMovies error:", error);
      set({ loader: false });
    }
  },

  getAllTv: async (value) => {
    set({ loader: true });
    try {
      let allResults = [];
      for (let page = 1; page <= 50; page++) {
        let { data } = await axios(
          `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${value}&include_adult=false&language=ru-RU&${page}


`
        );
        allResults = allResults.concat(data.results);
      }
      set({ tv: allResults, loader: false });
    } catch (error) {
      console.error("getAllMovies error:", error);
      set({ loader: false });
    }
  },
}));
