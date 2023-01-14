import cat_not_found from "./not_found_cat.jpg";

export default function NotFound() {
  return (
    <div className="not-found__container" area="content">
      <h1>Not Found Page</h1>
      <span className="cat" >
      <img src={cat_not_found} alt="cat" />   
      </span>
      </div>
  );
}
