import axios from "axios";

// Функція що робить запит на сервер і повертає відповідь.

export const fetchArticles = async (page = 0) => {
  const { data } = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=react&page=${page}`
  );
  return data;
};
