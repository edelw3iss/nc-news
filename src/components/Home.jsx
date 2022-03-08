import ArticleList from "./ArticleList";


export default function Home() {
  // const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   getArticles().then((articles) => {
  //     setArticles(articles);
  //   });
  // }, []);

  return (
    <main>
      <ArticleList />
    </main>
  );
}
