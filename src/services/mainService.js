import config from "./config.json";
import http from "./httpService";

export const initMain = (take = "all") => {
  return http.get(`${config.karafarinApi}/?take=${take}`);
};

export const news = (take = "12") => {
  return http.get(`${config.karafarinApi}/news?take=${take}`);
};

export const showNews = (id) => {
  return http.get(`${config.karafarinApi}/news/${id}`);
};

export const commentForPage = (id, pageNum) => {
  return http.get(`${config.karafarinApi}/comments/${id}?page=${pageNum}`);
};

export const addNewComment = (data) => {
  return http.post(`${config.karafarinApi}/comments`, data);
};

export const initScoreForPage = (pageId) => {
  return http.get(`${config.karafarinApi}/score/${pageId}`);
};

export const newScoreForPage = (data, pageId) => {
  return http.post(`${config.karafarinApi}/score/${pageId}`, data);
};

// export const ViewPopularNews = (take = 1) => {
//   return http.get(`${config.karafarinApi}/news?take=${take}`);
// };

// export const showListForId = (id) => {
//   return http.get(`${config.karafarinApi}/page/${id}`);
// };
