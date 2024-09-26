import axios from "axios";
import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import Loader from "./components/Loader/Loader";

function App() {
  //Це function зробленa методом аксіос. Але ми вчимо інший метод, тому коментую
  // useEffect(() => {
  //   axios
  //     .get("https://hn.algolia.com/api/v1/search?query=react")
  //     .then((res) => console.log(res.data));
  // }, []);

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  // const [totalPages, setTotalPages] = useState(0);

  //   Читаю з права наліво:
  // Даю запит на сервер
  // Він повертає response
  // Витягую data з response

  //1.Роблю фетч
  useEffect(() => {
    const getData = async () => {
      try {
        // 1. Зробили завантаження
        setIsLoading(true);
        // 2. Прийшли дані
        const data = await fetchArticles(page);
        // 3. Скидаємо завантаження, але в цьому блоці не пишемо
        // setIsLoading(false);
        //Кидаю його в блок finally, який спрацьовує і в try, і в catch
        //4.Записую дані в стейт
        setArticles((prev) => [...prev, ...data.hits]);
        //Щоб точно не показувалась помилка, де її немає, бо з новим запитом має зникнути все старе
        setIsError(false);
      } catch {
        setIsError(true);
        // Якщо помилка, то не показувати лоадер, а просто виводити повідомлення про помилку
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <h2>HTTP</h2>

      {/* «Якщо даних нема (articles.length=0), то показуй нічого (null) */}
      {articles.length > 0 && <ArticlesList articles={articles} />}

      {isLoading && <Loader />}
      {isError && <h2>Smth is wrong. ERROR</h2>}
      {/* {totalPages > page && (
        <button onClick={handleChangePage}> Load More</button>
      )} */}
      <button onClick={handleChangePage}> Load More</button>
    </div>
  );
}

export default App;
