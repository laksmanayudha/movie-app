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
      if (!response) throw new Error('Fail to get configuration data');
      return response;
    } catch (error) {
      return {};
    }
  }

  static async getGenres() {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const response = await DataStore.fetchData(`${baseUrl}/genre/movie/list`);
      if (!response) throw new Error('Fail to get genres data');
      return response.genres;
    } catch (error) {
      return [];
    }
  }

  static async getNowPlaying(page = 1) {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const params = DataStore.generateQueryParams({ page });
      const response = await DataStore.fetchData(`${baseUrl}/movie/now_playing?${params}`);
      if (!response) throw new Error('Fail to get now playing movies data');
      return response.results;
    } catch (error) {
      return [];
    }
  }

  static async getPopular(page = 1) {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const params = DataStore.generateQueryParams({ page });
      const response = await DataStore.fetchData(`${baseUrl}/movie/popular?${params}`);
      if (!response) throw new Error('Fail to get popular movies data');
      return response.results;
    } catch (error) {
      return [];
    }
  }

  static async getTopRated(page = 1) {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const params = DataStore.generateQueryParams({ page });
      const response = await DataStore.fetchData(`${baseUrl}/movie/top_rated?${params}`);
      if (!response) throw new Error('Fail to get top rated movies data');
      return response.results;
    } catch (error) {
      return [];
    }
  }

  static async getUpcoming(page = 1) {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const params = DataStore.generateQueryParams({ page });
      const response = await DataStore.fetchData(`${baseUrl}/movie/upcoming?${params}`);
      if (!response) throw new Error('Fail to get upcoming movies data');
      return response.results;
    } catch (error) {
      return [];
    }
  }

  static async getTMDBTrending(timeWindow = 'day') {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const response = await DataStore.fetchData(`${baseUrl}/trending/movie/${timeWindow}`);
      if (!response) throw new Error('Fail to get TMDB trending data');
      return response.results;
    } catch (error) {
      return [];
    }
  }

  static async getSearchMovies(keyword = '', page = 1) {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const params = DataStore.generateQueryParams({ query: keyword, page });
      const response = await DataStore.fetchData(`${baseUrl}/search/movie?${params}`);
      if (!response) throw new Error('Fail to get search movies data');
      return response.results;
    } catch (error) {
      return [];
    }
  }

  static async getMovieDetail(id = null) {
    try {
      const baseUrl = process.env.TMDB_BASE_URL;
      const response = await DataStore.fetchData(`${baseUrl}/movie/${id}`);
      if (!response) throw new Error('Fail to get movie detail');
      return response;
    } catch (error) {
      return {};
    }
  }
}

export default DataStore;
