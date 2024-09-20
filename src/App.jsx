import axios from "axios";
import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";

function App() {
  //Це це я зроблений методом аксіос. Але ми вчимо інший метод, тому коментую
  // useEffect(() => {
  //   axios
  //     .get("https://hn.algolia.com/api/v1/search?query=react")
  //     .then((res) => console.log(res.data));
  // }, []);

  const [articles, setArticles] = useState([]);

  //   Читаю з права наліво:
  // Даю запит на сервер
  // Він повертає response
  // Витягую data з response

  //1.Роблю фетч
  useEffect(() => {
    const getData = async () => {
      const data = await fetchArticles();
      console.log(data.hits);
      //2.Записую дані в стейт
      setArticles(data.hits);
    };
    getData();
  }, []);
  return (
    <div>
      <ul>
        {articles.map((item) => (
          <li key={item.ObjectId}>
            <a href={item.url} target="_blank">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
