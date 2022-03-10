// import { useEffect, useState } from "react";
// import { getArticlesByTopic } from "../utils/api";

// export default function SortArticle(setIsLoading, topic_slug, setArticles) {
 
//   topic_slug = undefined;


//   useEffect(() => {
//     if (sortBy) {
//       // setIsLoading(true);
//       getArticlesByTopic(topic_slug, sortBy).then((articles) => {
//         setArticles(articles);
//         // setIsLoading(false);
//       });
//     }
//   }, [topic_slug, sortBy]);

//   return (
    
//       <label>
//         Sort By:
//         <select onChange={(e) => setSortBy(e.target.value)}>
//           <option value="false">None</option>
//           <option value="title">Title</option>
//           <option value="author">Author</option>
//           <option value="created_at">Created at</option>
//           <option value="votes">Number of Likes</option>
//           <option value="comment_count">Number of Comments</option>
//         </select>
//       </label>

//   );
// }
