import "./Style.css";

function Formulario() {
  return (
    <div>
      <br />
      <h1 className="title">Contact us</h1>
      <p className="description">We appreciate your interest</p>
      <form className="survey-form">
        <label className="name-label">
          Name
          <br />
          <input className="name" type="text" placeholder="Name" required />
        </label>
        <br />
        <label className="email-label">
          E-mail
          <br />
          <input className="email" type="email" placeholder="E-mail" required />
        </label>
        <br />
        <label className="number-label">
          Age
          <br />
          <input
            id="number"
            type="number"
            min={10}
            max={99}
            className="form-control"
            placeholder="Age"
            required
          />
        </label>
        <br />
        <br />
        <label>
          Would you recommend our store?
          <br />
          <input
            type="radio"
            className="indoor-outdoor"
            defaultValue="Definitely"
          />
          Definitely
        </label>
        <br />
        <input type="radio" className="indoor-outdoor" defaultValue="Maybe" />
        Maybe
        <br />
        <input type="radio" name="indoor-outdoor" defaultValue="Not sure" />
        I'm not sure
        <br />
        <br />
        <label>Suggestions?</label>
        <br />
        <textarea
          id="comments"
          className="input-textarea"
          name="comment"
          placeholder="Any comments"
          spellCheck="false"
          defaultValue={""}
        />
        <button id="submit">Submit</button>
      </form>
    </div>
  );
}

export default Formulario;
