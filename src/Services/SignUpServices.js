import http from "./httpService";

export function signUpService(data) {
  return http.post("/user/register", data);
}
