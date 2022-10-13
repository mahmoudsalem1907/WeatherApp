const WeatherData = ({ weatherr }) => {
  return (
    <>
      <div className="container">
        <div className="text-center border mt-5 p-5 data">
          <h1 style={{ fontWeight: "bold", fontSize: 25 }} className="p-3">
            {weatherr.name} , {weatherr.country}
          </h1>
          <h1 className="fw-bold p-2" style={{ fontSize: 70 }}>
            {weatherr.tempreature}&deg;
          </h1>
          <i class="fa-solid fa-cloud fs-1 m-2"></i>
          <div className=" d-flex justify-content-center p-2">
            <h3 className="mx-3">Humidity</h3>
            <h3 className="mx-3">{weatherr.humidity}&deg;</h3>
          </div>
          <h2 className="p-3">{weatherr.description}</h2>
        </div>
      </div>
    </>
  );
};

export default WeatherData;
