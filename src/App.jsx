import axios from "axios";
import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import ArticlesList from "./components/ArticlesList/ArticlesList";

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
      <h2>HTTP</h2>
      {/* .........................1.......................... */}
      {/* <ArticlesList articles={articles} />
      Коли даних немає, то не має нічого рендеритись, а ul рендериться. Коли ми
      робимо фетч, то ul відмальовується, хоч і пустий. Треба зробити так, щоб
      він не малювався, якщо немає даних */}
      {/* .........................2.......................... */}
      {/* {articles.length && <ArticlesList articles={articles} />}
      Якщо article.length існує, тоді малюй список. Але при повільному інтернеті
      промальовується нуль (0), бо спочатку article.length=0, тоді логічне «і»
      (&&) переривається і промальовується лише нуль */}
      {/* .........................3.......................... */}
      {/* Перше рішення: використання тернарного оператора:
      «Якщо даних нема (articles.length=0), то показуй нічого (null)
      {articles.length ? <ArticlesList articles={articles} /> : null} */}
      {/* .........................4.......................... */}
      {/* Друге рішення: це приведення до булевого формату (!!) */}
      {!!articles.length && <ArticlesList articles={articles} />}
    </div>
  );
}

export default App;
