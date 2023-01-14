import github__cat from "./github__cat.png";
import "./Style.css"

export default function NotFound() {
  return (
    <div className="not-found__container" area="content">
      <h1>Not Found Page</h1>

      <img src={github__cat} alt="cat_not_found" />
    </div>
  );
}
