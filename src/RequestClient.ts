import axios, {AxiosResponse} from "axios";

export interface WebAppUserType{
  id: string,
  isBot: boolean,
  firstName: string,
  lastName: string,
  username: string
}
export interface ResaleType{
  title: string,
  content: string,
  webAppUserDto: WebAppUserType
}

export const registerResale = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const resalePost : ResaleType = {
    title: "hello title",
    content: "hello content",
    webAppUserDto: {
      id:"1",
      isBot: false,
      firstName: "iro",
      lastName: "stub",
      username: "irostub"
    }
  }

  const formData = new FormData();
  // formData.append('images', []);
  formData.append('resaleDto', new Blob([JSON.stringify(resalePost)], {
    type: "application/json"
  }));

  return axios.post(`${url}/api/v1/resale/posts`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
}
export const getResales = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  return axios.get<{data : ResaleType[]}>(`${url}/api/v1/resale/posts?page=0`);
}
