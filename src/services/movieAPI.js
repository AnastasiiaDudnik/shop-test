import axios from 'axios';

const API_KEY = '7113ba9605fd4f5593de8c8922948eb6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMovieList = async () => {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  } catch {}
};

export const getMovieSearch = async query => {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data;
  } catch (error) {}
};

export const getMovie = async (id, signal) => {
  try {
    return await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  } catch (error) {}
};

export const getCast = async id => {
  try {
    const response = await axios.get(
      `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {}
};

export const getReview = async id => {
  try {
    const response = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {}
};
