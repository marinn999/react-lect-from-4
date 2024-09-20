import axios from "axios";
import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import Loader from "./components/Loader/Loader";

function App() {
  //Це це я зроблений методом аксіос. Але ми вчимо інший метод, тому коментую
  // useEffect(() => {
  //   axios
  //     .get("https://hn.algolia.com/api/v1/search?query=react")
  //     .then((res) => console.log(res.data));
  // }, []);

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        const data = await fetchArticles();
        // 3. Скидаємо завантаження
        setIsLoading(false);
        //4.Записую дані в стейт
        setArticles(data.hits);
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h2>HTTP</h2>
      {/* ................................................... */}
      {/* <ArticlesList articles={articles} />
      Коли даних немає, то не має нічого рендеритись, а ul рендериться. Коли ми
      робимо фетч, то ul відмальовується, хоч і пустий. Треба зробити так, щоб
      він не малювався, якщо немає даних */}
      {/* ................................................... */}
      {/* {articles.length && <ArticlesList articles={articles} />}
      Якщо article.length існує, тоді малюй список. Але при повільному інтернеті
      промальовується нуль (0), бо спочатку article.length=0, тоді логічне «і»
      (&&) переривається і промальовується лише нуль */}
      {/* .........................1.......................... */}
      {/* Перше рішення: використання тернарного оператора:
      «Якщо даних нема (articles.length=0), то показуй нічого (null)
      {articles.length ? <ArticlesList articles={articles} /> : null} */}
      {/* .........................2.......................... */}
      {/* Друге рішення: це приведення до булевого формату (!!)
      {!!articles.length && <ArticlesList articles={articles} />} */}
      {/* .........................3.......................... */}
      {/* Або максимально просто */}
      {articles.length > 0 && <ArticlesList articles={articles} />}

      {isLoading && <Loader />}
    </div>
  );
}

export default App;
