import http from "./httpService";

export function loginServices(data) {
  return http.post("/user/login", data);
}
