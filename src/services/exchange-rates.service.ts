import api from './_axios'

class ExchangeRates {
  async getSymbols(): Promise<any> {
    return await api
      .get(`/exchangerates_data/symbols`)
      .then((response) => response.data)
  }

  async getLatestCurrency(params: any): Promise<any> {
    return await api
      .get(`/exchangerates_data/latest`, { params })
      .then((response) => response.data)
  }

  async getConvert(params: any): Promise<any> {
    return await api
      .get(`/exchangerates_data/convert`, { params })
      .then((response) => response.data)
  }
}

export default new ExchangeRates()
