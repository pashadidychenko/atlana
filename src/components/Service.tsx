import axios from "axios";

async function getGitUsers(query) {
  return await axios
    .get(`https://api.github.com/search/users?q=${query}`) // Выдача по умолчанию (30 результатов)
    .then((response) => response.data.items)
    .catch((error) => console.log(error));
}

async function getUserInfo(login) {
  return await axios
    .get(`https://api.github.com/users/${login}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export { getGitUsers, getUserInfo };

// Максимальная выдача по АРІ 100 результатов
// .get(`https://api.github.com/search/users?q=${query}&per_page=100`)
