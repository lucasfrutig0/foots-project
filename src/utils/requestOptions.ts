let myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "2897ffb20a0fa8e43da839c6c6c38ad7");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

export const requestOptions = {
  method: "GET",
  headers: myHeaders,
};
