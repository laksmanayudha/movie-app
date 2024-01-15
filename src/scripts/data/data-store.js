class DataStore {
  static getCarouselData() {
    return [
      {
        active: true,
        image: '/assets/img/carousel_one.jpg',
        align: 'left',
        label: 'Welcome Movie Enthusiast!',
        description: 'Millions of films and reviews that you can search for are available here.',
      },
      {
        active: false,
        image: '/assets/img/carousel_three.jpg',
        align: 'center',
        label: 'Millions of Movies with Various Genres',
        description: 'You can find various genres of films here ranging from Action, Drama, Horror, etc.',
      },
      {
        active: false,
        image: '/assets/img/carousel_two.jpg',
        align: 'right',
        label: 'Discover and Explore Movies on Our Search',
        description: 'Use the movie name or select the available genre to search for the movie you want.',
      },
    ];
  }

  static async fetchData(url, options = {}) {
    try {
      const newOptions = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN_AUTH}`,
        },
        ...options,
      };
      const response = await fetch(url, newOptions);
      if (response.status !== 200) throw new Error('Fetching error');

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static generateQueryParams(params = {}) {
    const urlSearchParams = new URLSearchParams('');
    Object.keys(params).forEach((key) => {
      urlSearchParams.append(key, params[key]);
    });
    return urlSearchParams.toString();
  }

  static async pool(fetches) {
    try {
      const responses = await Promise.all(fetches);
      return responses;
    } catch (error) {
      return null;
    }
  }

  static async getConfiguration() {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const response = await DataStore.fetchData(`${baseUrl}/configuration`);
      return response;
    } catch (error) {
      return null;
    }
  }

  static async getGenres() {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const response = await DataStore.fetchData(`${baseUrl}/genre/movie/list`);
      return response.genres;
    } catch (error) {
      return null;
    }
  }

  static async getNowPlaying(page = 1) {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const params = DataStore.generateQueryParams({ page });
      const response = await DataStore.fetchData(`${baseUrl}/movie/now_playing?${params}`);
      return response.results;
    } catch (error) {
      return null;
    }
  }

  static async getPopular(page = 1) {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const params = DataStore.generateQueryParams({ page });
      const response = await DataStore.fetchData(`${baseUrl}/movie/popular?${params}`);
      return response.results;
    } catch (error) {
      return null;
    }
  }

  static async getTopRated(page = 1) {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const params = DataStore.generateQueryParams({ page });
      const response = await DataStore.fetchData(`${baseUrl}/movie/top_rated?${params}`);
      return response.results;
    } catch (error) {
      return null;
    }
  }

  static async getUpcoming(page = 1) {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const params = DataStore.generateQueryParams({ page });
      const response = await DataStore.fetchData(`${baseUrl}/movie/upcoming?${params}`);
      return response.results;
    } catch (error) {
      return null;
    }
  }

  static async getTMDBTrending(timeWindow = 'day') {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const response = await DataStore.fetchData(`${baseUrl}/trending/movie/${timeWindow}`);
      return response.results;
    } catch (error) {
      return null;
    }
  }
}

export default DataStore;
