export default function SortArticle() {
  
    return (
    <form>
      <label>
        Sort By:
        <select>
          <option>Title</option>
          <option>Author</option>
          <option>Created at</option>
          <option>Number of Likes</option>
          <option>Number of Comments</option>
        </select>
      </label>
    </form>
  );
}
