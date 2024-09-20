import axios from "axios";

// Функція що робить запит на сервер і повертає відповідь.

export const fetchArticles = async () => {
  const { data } = await axios.get(
    "https://hn.algolia.com/api/v1/search?query=react"
  );
  return data;
};
