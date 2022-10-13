import Error from "./components/Error.jsx";
import Form from "./components/Form.jsx";
import WeatherData from "./components/WeatherData.jsx";
import "./css/style.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [weatherr, setWeather] = useState({
    name: "",
    country: "",
    description: "",
    humidity: "",
    tempreature: "",
    eerror: false,
    status: false,
  });
  async function getData(e) {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    let res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=75d318d035df4bf2d25d159388e9428e`
    );
    if (res.status == 200) {
      const { data } = res;
      setWeather({
        name: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        tempreature: Math.floor(data.main.temp - 273.25),
        // error: false,
        status: true,
      });
      console.log(weatherr.status);
    } else {
      setWeather({
        // status: false,
        eerror: true,
      });
    }
    console.log(weatherr.eerror);
  }
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="app">
      <Form getData={getData} />
      {weatherr.eerror ? <Error /> : ""}
      {weatherr.status ? (
        <WeatherData weatherr={weatherr} />
      ) : (
        <div className="container">
          <div className="text-danger my-3 text-center">
            Please Enter Valid Location ......
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
