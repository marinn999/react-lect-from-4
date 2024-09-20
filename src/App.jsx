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
  const [isError, setIsError] = useState(false);

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
        // 3. Скидаємо завантаження, але в цьому блоці не пишемо
        // setIsLoading(false);
        //Кидаю його в блок finally, який спрацьовує і в try, і в catch
        //4.Записую дані в стейт
        setArticles(data.hits);
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
      {isError && <h2>Smth is wrong. ERROR</h2>}
    </div>
  );
}

export default App;
