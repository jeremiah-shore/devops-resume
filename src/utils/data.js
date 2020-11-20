export const fetchJsonData = (path) => {
  return fetch(path + "",
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  ).then(response => {
    return response.json();
  });
};