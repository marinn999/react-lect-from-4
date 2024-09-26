1. Підключили бібліотеку аксіос
2. Створили ф-ю fetchArticles (api.js)
3. Створюємо стейт
   const [articles, setArticles] = useState([]);
   , робим ф-ю
   setArticles((prev) => [...prev, ...data.hits]);
4. Малюєм розмітку в залежності від отриманих результатів  
   {articles.length > 0 && <ArticlesList articles={articles} />}
5. Додаємо
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   Пишу try/catch, перед запитом обовʼязково ставлю лоадер тру і еррор фолс.
6. Для пункту 5 нам треба ф-я, тому створюю
   useEffect(() => {
   const getData = async () => {
   try {
   і викликаю її в кінці ефекту
7. Відмальовую і створюю кожному компоненти
   {isLoading && <Loader />}
   {isError && <h2>Smth is wrong. ERROR</h2>}
8. Пагінація - завантаження даних по кнопці. Додою
   const [page, setPage] = useState(0);

const handleChangePage = () => {
setPage((prev) => prev + 1);
};

<button onClick={handleChangePage}> Load More</button> 9. Передаємо залежності для ефекту - в залежності від чого буде змінюватись запит на сторінку
const data = await fetchArticles(page, );

}, [page, ]); 10. Щоб шукати різні статті додаємо стейт

const [query, setQuery] = useState("css");
Створюю SearchBar з форміком 11. Сталась проблема: старий результат пошуку не скидався, а при новому пошуку до старих результатів додавались нові, тому пишу

const handleSetQuery = (topic) => {
setQuery(topic);
setArticles([]);
setPage(0);
};
що очищає стан і очищає сторінку при зміні query.

1.  Встановити axios
2.  Створити базову розмітку
3.  створити сервіси + АРІ
4.  Створити перший запит та викликати його в useEffect (App)
5.  Створити стан під наш тип данних
    (messages, articles, posts, pictures,
    users)
6.  Записати відповідь з сервера в
    стейт
7.  Відмалювати результат
    передаючи пропси до компонента.
8.  Створюємо кнопку пагінації.
9.  Створюємо стейт для пагінації.
10. Створюємо функцію лля пргінації handleChangePage
11. Додаємо номер сторінки до запиту в useEfect , оновлюємо залежності
12. [...prev, ...newResult)
13. створити серч бар
14. Створити стейт для збережения строки пошуку
15. Створити функцію для пошуку handleSetQuery
16. Додати очистку в функцію
17. Додати скидання номера сторінки
18. Відпрацювати Лоадери та еррори
