import { Map, Placemark } from "react-yandex-maps";
import MultiGeocoder from "multi-geocoder";
import { useState, useEffect } from "react";
import { ReactComponent as Geomark } from "../images/geomark.svg";
import { useSelector } from "react-redux";

function MapElem({ data = [] }) {
  const [coordinates, setCoordinates] = useState([]);
  const [currViewPort, setCurrentViewport] = useState([54.3282, 48.3866]);
  const { city, street } = useSelector((store) => store.adress);
  const geocoder = new MultiGeocoder({
    coordorder: "latlong",
    apikey: "d46de12b-00d7-4b43-a820-de93cd5d7b06",
    lang: "ru-RU",
  });

  //находим координаты каждой точки
  useEffect(() => {
    //для этого объекты массива превращаем в строки "город, улица" для каждого адреса
    const arrayForGeocoder = data
      .map(({ city, streets }) => {
        const arr = streets.map(({ street }) => `${city}, ${street}`);
        return arr;
      })
      //делаем двумерный массив одномерным
      .flat();
    geocoder
      .geocode(arrayForGeocoder, { apikey: "d46de12b-00d7-4b43-a820-de93cd5d7b06" })
      .then((result) => {
        const coordinates = result.result.features.map(
          ({ geometry, properties, bbox }) => {
            return {
              coordinates: geometry.coordinates,
              name: properties.name,
              bbox: bbox,
            };
          }
        );

        setCoordinates(coordinates);
      });
  }, [data]);

  useEffect(() => {
    if (city || street) {
      const adress = [`${city} ${street}`];
      geocoder
        .geocode(adress, {
          apikey: "d46de12b-00d7-4b43-a820-de93cd5d7b06",
        })
        .then(({ result }) => {
          setCurrentViewport(result.features[0].geometry.coordinates);
        });
    }
  }, [city, street]);

  return (
    <div className="map_element">
      <Map className="map_element" state={{ center: currViewPort, zoom: 13 }}>
        {coordinates.map((adressObj) => (
          <Placemark
            defaultProperties={{
              iconLayout: "default#image",
              iconImageHref: "../images/geomark.png",
              iconImageSize: [16, 16],
              iconImageOffset: [0, 0],
            }}
            defaultGeometry={adressObj.coordinates}
            key={adressObj.name}
          />
        ))}
      </Map>
    </div>
  );
}
export default MapElem;
