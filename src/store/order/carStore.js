import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const databaseApi = createApi({
  reducerPath: "carList",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-factory.simbirsoft1.com/api/",
  }),
  endpoints: (builders) => ({
    getCars: builders.query({
      query: () => {
        return {
          url: "db/car",
          method: "GET",
          headers: {
            "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
            Authorization: "Bearer 4cbcea96de",
          },
        };
      },
      //обрабатывает респонс с сервера, кешируя только отфильтрованную информацию
      transformResponse: (response) => {
        const filteredData = response.data.filter((carObj) => {
          //было много авто с именем тест, картинка была битая, а самих экземпляров куча
          const nameComparasing = carObj.name !== "Теst";
          /*выявил что url начинавшиеся не с / помимо того что были длинной 
          в несколько сотен символов, были еще и битыми, так же в отсев*/
          const imgPathCheck = carObj.thumbnail.path.charAt(0) === "/";
          //ну и у авто должна быть категория для их фильтрции, те которые ее не имеют - в сброс
          return nameComparasing && carObj.categoryId && imgPathCheck;
        });

        const categories = filteredData.reduce(
          (accumulator, { categoryId }) => accumulator.add(categoryId.name),
          new Set() //Set чтоб сюда попадали только уникальные значения
        );
        return {
          carCategories: [...categories],
          carData: filteredData,
        };
        //return filteredData;
      },
    }),
    getTariffInfo: builders.query({
      query: () => {
        return {
          url: `db/rate`,
          method: "GET",
          headers: {
            "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
            Authorization: "Bearer 4cbcea96de",
          },
        };
      },
    }),
    getAdressInfo: builders.query({
      query: () => {
        return {
          url: "db/point",
          method: "GET",
          headers: {
            "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
            Authorization: "Bearer 4cbcea96de",
          },
        };
      },
      /*
      этот ужас который я называю структурой данных возвращает массив
      каждый элемент которого - объект с id города и его названием, а так же массивом улиц
      каждый элемент массива - объект с id адреса, его названием и небольшим описанием
      */
      transformResponse: ({ data }) => {
        //фильтруем так, чтоб была информация о городе
        const filteredData = data.filter((adress) => adress.cityId);
        //нааходим уникальные города
        const cities = filteredData.reduce(
          (accum, { cityId }) => accum.add(cityId.name),
          new Set()
        );
        //превращаем Set в массив
        const citiesArr = [...cities];
        const citiesWithStreets = citiesArr.map((city) => {
          //находим все адреса в который указан город
          const streetsOfCity = filteredData.filter(
            ({ cityId }) => cityId.name === city
          );
          //создаем объект который будем возвращать
          const mainAdressStructure = {
            city,
            id: streetsOfCity[0].cityId.id,
            streets: [],
          };
          //заполняем массив streets адресами из фильтрованного массива
          streetsOfCity.forEach((street) => {
            mainAdressStructure.streets.push({
              street: street.address,
              id: street.id,
              name: street.name,
            });
          });
          return mainAdressStructure;
        });
        return citiesWithStreets;
      },
    }),
    postOrder: builders.query({
      query: (orderDetails) => {
        return {
          url: "db/order",
          method: "POST",
          headers: {
            "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
            Authorization: "Bearer 4cbcea96de",
            "Content-Type": "application/json",
          },

          body: orderDetails,
        };
      },
    }),
    getOrderStatus: builders.query({
      query: () => ({
        url: "db/orderStatus",
        method: "GET",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
          Authorization: "Bearer 4cbcea96de",
        },
      }),
    }),
    getOrder: builders.query({
      query: (id) => {
        return {
          url: `db/order/${id}`,
          method: "GET",
          headers: {
            "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
            Authorization: "Bearer 4cbcea96de",
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetTariffInfoQuery,
  useGetAdressInfoQuery,
  useGetOrderStatusQuery,
  usePostOrderQuery,
  useGetOrderQuery,
} = databaseApi;
