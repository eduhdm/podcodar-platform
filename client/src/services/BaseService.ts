import { HttpClient } from "../utils/httpClient"
import httpClient from "../utils/httpClient";

export default class BaseService {
  client: HttpClient;
  constructor() {
    this.client = httpClient;
  }
}
