import axios from "axios";

// Функція що робить запит на сервер і повертає відповідь.

export const fetchArticles = async (page = 0, query) => {
  const { data } = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`
  );
  return data;
};
