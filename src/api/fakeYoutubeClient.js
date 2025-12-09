import axios from 'axios';

export default class FakeYoutubeClient {
  async search() {
    return axios.get('/videos/search.json');
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }

  async channel() {
    return axios.get('/videos/channel.json');
  }

  async playlists() {
    return axios.get('/videos/lists.json');
  }
}
