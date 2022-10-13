const Form = ({ getData }) => {
  return (
    <>
      <div className="container">
        <form onSubmit={getData} className="d-flex pt-2 mt-5">
          <input
            type="text"
            id="disabledTextInput"
            className="form-control me-3 w-50"
            placeholder="CITY..."
            name="city"
          />
          <input
            type="text"
            id="disabledTextInput"
            className="form-control me-3 w-50"
            name="country"
            placeholder="COUNTERY..."
          />
          <button type="submit" className="btn btn-info w-25">
            GET WEATHER
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
