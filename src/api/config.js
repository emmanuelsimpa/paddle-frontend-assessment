import axios from "axios";

export const URL = axios.get('https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc&page=2')