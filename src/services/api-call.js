export const apiCall = searchQuery => {
  var apiKey = "OYnLtOAyYAcEBVo8Nvkmab4YWxgqJcbT";
  var baseURL = "http://api.giphy.com/v1/gifs/search";
  return fetch(
    `${baseURL}?api_key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(
      searchQuery
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  ).then(response => response.json());
  // )
  //   .then(response => response.json())
  //   .then(responseJson => {
  //     console.log(responseJson);
  //   });
};
