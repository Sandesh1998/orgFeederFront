import axios from "axios";

const baseURL = "https://orgfeeder-backend.onrender.com/orgFeeder/api/";

const api = axios.create({
  baseURL: baseURL,
});

export const createBoard = async (data) =>
  api.post("board/create-board", data, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const getBoard = async (id) =>
  api.get(`board/get-board/org/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });

export const getPosts = async (id) =>
  api.get(`post/get-post/board/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });

export const createPost = async (data) =>
  api.post("post/create-post", data, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const getPostId = async (id) =>
  api.get(`/post/get-post/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const votePost = async ({ id }) => {
  const token = localStorage.getItem("token");
  return api.post(
    `/post/cast-vote/${id}`,
    { data: "ram" },
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Comments APIS

export const postcomment = async (data) =>
  api.post(`/comment/create-comment`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const deleteComment = async ({ id }) =>
  api.delete(`/comment/delete-comment/${id}`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const patchComment = async ({ id, comment }) =>
  api.patch(
    `/comment/update-comment/${id}`,
    { comment },
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export default api;
