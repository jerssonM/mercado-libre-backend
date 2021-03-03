const {
  BASE_URL,
  PRODUCT_URL,
  SEARCH_PRODUCT_URL
} = require('../../config/constants');
const Api = require('../../utils/api');

class Items {
  constructor() {
    this.api = new Api(BASE_URL);
  }

  async getAll(productName) {
    const data = await this.api.fetch(`${SEARCH_PRODUCT_URL}${productName}`);
    return data;
  }

  async getById(id) {
    const [info, description] = await Promise.all([
      this.api.fetch(`${PRODUCT_URL}${id}`),
      this.api.fetch(`${PRODUCT_URL}${id}/description`)
    ]);
    return { ...info, ...description };
  }
}

module.exports = Items;
