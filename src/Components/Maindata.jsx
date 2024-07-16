import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import "../Componentstyle/Main.css";
import load from "../pics/Rings (1).svg";

function Maindata({ city = "london", setBackgroundImageURL }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const Theweather = useCallback(
    async (city) => {
      const key = "24f4cabc9b1a10af6e3eeb4cc150a9ef";
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&formatted=0`
        );
        const actualData = await response.json();
        if (actualData.city) {
          setData(actualData);
          setBackgroundImageURL(actualData.list[0].weather[0].icon);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    },
    [setBackgroundImageURL]
  );

  useEffect(() => {
    Theweather(city);
  }, [city, Theweather]);

  useEffect(() => {
    if (!loading && data) {
      setIsMounted(true);
    }
  }, [loading, data]);

  if (loading || !isMounted) {
    return (
      <div className="loader">
        <img src={load} alt="Loading..." />
      </div>
    );
  }

  const icons = `./icons/${data.list[0].weather[0].icon}.svg`;
  const icond1 = `./icons/${data.list[7].weather[0].icon}.svg`;
  const icond2 = `./icons/${data.list[15].weather[0].icon}.svg`;
  const icond3 = `./icons/${data.list[23].weather[0].icon}.svg`;
  const icond4 = `./icons/${data.list[31].weather[0].icon}.svg`;
  const icond5 = `./icons/${data.list[39].weather[0].icon}.svg`;

  const sunrise = data.city.sunrise;
  const sunset = data.city.sunset;
  const timezone = data.city.timezone;

  return (
    <>
      <div className="start">
        <div className="newpage">
          <div className="city">
            <div className="daily">Clement's Daily Forecast</div>
            <div className="dailydata">
              <span className="name">{data.city.name}</span>
              <br />
              <span className="citydate">
                {moment
                  .utc(new Date().setTime(data.list[0].dt * 1000))
                  .add(timezone, "seconds")
                  .format("dddd, MMMM Do YYYY, ")}
              </span>
            </div>
          </div>

          <div className="maindata">
            <div className="temper">
              <img src={icons} alt="not found" />
              <div className="temp">
                <span className="display">
                  {data.list[0].main.temp.toFixed(1)}&deg;{" "}
                  <i className="fa-solid fa-temperature-full"></i>
                </span>
                <br />
                <span className="display1">
                  {data.list[0].weather[0].description}
                </span>
              </div>
            </div>

            <div className="icon">
              <div className="acloudy">
                <span className="icon1">
                  {data.list[0].main.temp_max.toFixed(1)}{" "}
                  <i className="fa-solid fa-temperature-high"></i>
                </span>
                <br />
                <span className="icon2">High </span>
              </div>
              <div className="bcloudy">
                <span className="icon1">
                  0{data.list[0].wind.speed.toFixed()}_km/h
                </span>
                <br />
                <span className="icon2">Wind Speed</span>
              </div>
              <div className="ccloudy">
                <span className="icon1">
                  {moment
                    .utc(sunrise, "X")
                    .add(timezone, "seconds")
                    .format("h:mm a")}{" "}
                </span>
                <br />
                <span className="icon2">Sunrise</span>
              </div>
              <div className="dcloudy">
                <span className="icon1">
                  {data.list[0].main.temp_min.toFixed(1)}{" "}
                  <i className="fa-solid fa-temperature-low"></i>
                </span>
                <br />
                <span className="icon2">Low</span>
              </div>
              <div className="ecloudy">
                <span className="icon1">{data.list[0].main.humidity}%</span>
                <i className="fa-solid fa-droplet-degree"></i>
                <br />
                <span className="icon2">Humidity</span>
              </div>
              <div id="sunset" className="fcloudy">
                <span className="icon1">
                  {moment
                    .utc(sunset, "X")
                    .add(timezone, "seconds")
                    .format("h:mm a")}{" "}
                  <i className="fa-solid fa-sunrise"></i>
                </span>
                <br />
                <span className="icon2">Sunset</span>
              </div>
            </div>
          </div>

          <div className="daily">Five Days Forecast</div>
          <div className="dailyweather">
            <div className="day">
              <span className="wday">
                {moment(new Date().setTime(data.list[7].dt * 1000)).format(
                  "ddd"
                )}
              </span>
              <br />
              <img src={icond1} alt="not found" />
              <br />
              <span className="head">Temp </span>
              <span className="val">
                {data.list[7].main.temp.toFixed(1)} C&deg;
              </span>
              <br />
              <br />
              <span className="head">Feel like </span>
              <span className="val">
                {data.list[7].main.feels_like.toFixed(1)} C&deg;
              </span>
              <br />
              <br />
              <span className="head">Moist </span>
              <span className="val">
                {data.list[7].main.humidity.toFixed()} %
              </span>
              <br />
              <br />
              <span className="head">{data.list[7].weather[0].main}</span>
            </div>

            <div className="day">
              <span className="wday">
                {moment(new Date().setTime(data.list[15].dt * 1000)).format(
                  "ddd"
                )}
              </span>
              <br />
              <img src={icond2} alt="not found" />
              <br />
              <span className="head">Temp </span>
              <span className="val">
                {data.list[15].main.temp.toFixed(1)} C&deg;
              </span>
              <br />
              <br />
              <span className="head">Feel like </span>
              <span className="val">
                {data.list[15].main.feels_like.toFixed(1)} C&deg;
              </span>
              <br />
              <br />
              <span className="head">Moist</span>
              <span className="val">
                {data.list[15].main.humidity.toFixed()} %
              </span>
              <br />
              <br />
              <span className="head">{data.list[15].weather[0].main}</span>
            </div>

            <div className="day">
              <span className="wday">
                {moment(new Date().setTime(data.list[23].dt * 1000)).format(
                  "ddd"
                )}
              </span>
              <br />
              <img src={icond3} alt="not found" />
              <br />
              <span className="head">Temp</span>
              <span className="val">
                {data.list[23].main.temp.toFixed(1)} C&deg;
              </span>
              <br />
              <br />
              <span className="head">Feel like </span>
              <span className="val">
                {data.list[23].main.feels_like.toFixed(1)} C&deg;
              </span>
              <br />
              <br />
              <span className="head">Moist </span>
              <span className="val">
                {data.list[23].main.humidity.toFixed()} %
              </span>
              <br />
              <br />
              <span className="head">{data.list[23].weather[0].main}</span>
            </div>

            <div className="day">
              <span className="wday">
                {moment(new Date().setTime(data.list[31].dt * 1000)).format(
                  "ddd"
                )}
              </span>
              <br />
              <img src={icond4} alt="not found" />
              <br />
              <span className="head">Temp</span>
              <span className="val">
                {data.list[31].main.temp.toFixed(1)} C&deg;
              </span>
              <br />
              <br />
              <span className="head">Feel like </span>
              <span className="val">
                {data.list[31].main.feels_like.toFixed(1)} C&deg;
              </span>
              <br />
              <br />
              <span className="head">Moist </span>
              <span className="val">
                {data.list[31].main.humidity.toFixed()} %
              </span>
              <br />
              <br />
              <span className="head">{data.list[31].weather[0].main}</span>
            </div>

            <div className="day">
              <span className="wday">
                {moment(new Date().setTime(data.list[39].dt * 1000)).format(
                  "ddd"
                )}
              </span>
              <br />
              <img src={icond5} alt="not found" />
              <br />
              <span className="head">Temp </span>
              <span className="val">
                {data.list[39].main.temp.toFixed(1)} C&deg;
              </span>
              <br />
              <br />
              <span className="head">Feel like </span>
              <span className="val">
                {data.list[39].main.feels_like.toFixed(1)} C&deg;
              </span>
              <br />
              <br />
              <span className="head">Moist </span>
              <span className="val">
                {data.list[39].main.humidity.toFixed()} %
              </span>
              <br />
              <br />
              <span className="head">{data.list[39].weather[0].main}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maindata;
