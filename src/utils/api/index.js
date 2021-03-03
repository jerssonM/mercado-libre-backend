const fetch = require('node-fetch');

class Api {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  async fetch(endpoint, options) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, options);
      if (response.status === 200) {
        return response.json();
      }
      return { error: 'Error' };
    } catch (error) {
      return { error };
    }
  }
}

module.exports = Api;
