import cat_not_found from "./not_found_cat.jpg";

export default function NotFound() {
  return (
    <div className="not-found__container" area="content">
      <h1>Not Found Page</h1>
      <img src={cat_not_found} alt="cat" className="cat" />   
      </div>
  );
}
