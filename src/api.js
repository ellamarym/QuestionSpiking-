import axios from "axios";

const countriesAPI = axios.create({
  baseURL: "https://countriesnow.space/api/v0.1/countries",
});




export const getAllCountries = () => {
    return countriesAPI.get("/flag/images").then((response) => {
      return response.data.data.map((country) => {
        return country.name;
      });
    }).catch((err) => {
        return {error: err.response.data.msg}
     });
  };

  export const getAllFlagUrls = () => {
    return countriesAPI.get("/flag/images").then((response) => {
      return response.data.data.map((country) => {
        return country.flag;
      });
    }).catch((err) => {
        return {error: err.response.data.msg}
     });
  };

export const getAllElements = () => {
    const options = {
        method: 'GET',
        url: 'https://periodictable.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': '0d41b43582msh8badb52ae7be9b3p16fe83jsn6024119af60e',
          'X-RapidAPI-Host': 'periodictable.p.rapidapi.com'
        }
      };
      
      return axios.request(options).then(function (response) {
          return response.data;
      }).catch(function (error) {
          console.error(error);
      });
}

export const getAllCapitals = () => {
    return axios.get('https://restcountries.com/v2/all').then((response) => {
        return response.data
    })
}