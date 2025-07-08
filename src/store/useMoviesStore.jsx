import axios from "axios";
import { create } from "zustand";
import { API_KEY } from "../api/Api";

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
  loading: false,
  search: [],

  getImg: async () => {
    set({ loading: true });
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=11`
    );
    set({ img: data.results, loading: false });
  },
  getPopular: async (value) => {
    set({ loading: true });
    let { data } = await axios.get(
      ` https://api.themoviedb.org/3/${
        value ? "movie" : "tv"
      }/popular?api_key=${API_KEY}&language=en-US&page=11`
    );
    set({ movies: data.results, loading: false });
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
}));
