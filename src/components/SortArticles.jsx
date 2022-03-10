export default function SortArticles({setSortBy}) {
  return (
    <label>
      Sort By:
      <select
        onChange={(e) => {
          const valueArray = e.target.value.split(" ");
          setSortBy(valueArray);
        }}
      >
        <option value="created_at desc">Most recent</option>
        <option value="created_at asc">Oldest</option>
        <option value="title asc">Title A-Z</option>
        <option value="title desc">Title Z-A</option>
        <option value="author asc">Author A-Z</option>
        <option value="author desc">Author Z-A</option>
        <option value="votes asc">Fewest Likes</option>
        <option value="votes, desc">Most Likes</option>
        <option value="comment_count asc">Fewest Comments</option>
        <option value="comment_count desc">Most Comments</option>
      </select>
    </label>
  );
}
