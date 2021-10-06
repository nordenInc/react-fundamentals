import axios from "axios";

export default class PostService {
  static async getall(limit = 10, page = 1) {
    const respone = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return respone;
  }

  static async getById(id) {
    const respone = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    return respone;
  }

  static async getCommentsById(id) {
    const respone = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return respone;
  }
}
