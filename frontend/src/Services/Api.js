import { AxiosInstance } from "./Axios";

export const getAllMovies = async () => {
  try {
    console.log("-- ivoking getAllMovies --");
    const response = await AxiosInstance.get("/movie/");
    if (response) {
      console.log("io ===>", response.data);
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAllProjections = async () => {
  try {
    console.log("-- invoking getAllProjections --");
    const response = await AxiosInstance.get("/projection/");
    if (response) {
      console.log("io ===>", response);
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getTakenSeatsByProjection = async (id) => {
  try {
    console.log("-- ivoking getTakenSeatsByProjection --");
    const response = await AxiosInstance.get(`/order/${id}`);
    if (response) {
      console.log("seats =>", response);
      return response.data.seat;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getProjection = async (id) => {
  try {
    console.log("-- ivoking getProjection --");
    const response = await AxiosInstance.get(`/projection/${id}`);
    if (response) {
      console.log("io lery io ==>", response);
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const createOrder = async ({ data }) => {
  try {
    console.log("-- invoking createOrder --");
    const response = await AxiosInstance.post("/order/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response) {
      console.log("response =>", response);
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};
