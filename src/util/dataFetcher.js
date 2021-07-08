import axios from "axios";

/**
 * Get Data
 * @param endPoint end point uri
 * @param options axios GET options
 */
export const getData = async (endPoint, options = {}) => {
  try {
    const response = await axios.get(endPoint, {
      ...options,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
