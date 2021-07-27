// @flow
import axios from 'axios'
import { AxiosRequestConfig, AxiosPromise } from 'axios';

class HttpClient {
  _baseUri: string = "http://localhost:3001/v1/"

  _axios = axios.create()

  token: string = '';

  constructor() {
    this._axios.defaults.baseURL = this._baseUri
    this._axios.defaults.headers.common['Content-Type'] = 'application/json'
  }

  setBaseURL(url: string): this {
    this._baseUri = url
    this._axios.defaults.baseURL = this._baseUri
    return this
  }

  errorHandler = (error: any): any => {
    if (error.response) {
      console.error(`Erro HTTP [${error.response.status}]`, error.request)
    }
    return Promise.reject(error)
  }

  setToken(token: string): this {
    this.token = token
    if (this.token) {
      this._axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
    }
    return this
  }

  clearToken(): this {
    this.token = ''
    this._axios.defaults.headers.common.Authorization = ''
    return this
  }

  request(config: AxiosRequestConfig): AxiosPromise<any> {
    return this._axios.request(config).catch(this.errorHandler)
  }

  get(url: string, config?: AxiosRequestConfig): AxiosPromise<any> {
    return this._axios.get(url, config).catch(this.errorHandler)
  }

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise<any> {
    return this._axios.delete(url, config).catch(this.errorHandler)
  }

  head(url: string, config?: AxiosRequestConfig): AxiosPromise<any> {
    return this._axios.head(url, config).catch(this.errorHandler)
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<any> {
    return this._axios.post(url, data, config).catch(this.errorHandler)
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<any> {
    return this._axios.put(url, data, config).catch(this.errorHandler)
  }

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<any> {
    return this._axios.patch(url, data, config).catch(this.errorHandler)
  }
}

const httpClient = new HttpClient()

export { HttpClient }
export default httpClient
