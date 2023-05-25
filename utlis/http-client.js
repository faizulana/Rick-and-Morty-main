import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TARGET,
  headers: { 'Accept': 'application/json' },
});

instance.interceptors.request.use(
  function (config) {
    console.log('Здесь можете сделать что-нибудь с перед отправкой запроса')
    console.log(config)
    return config;
  },
  function (error) {
    console.log('Сделайте что-нибудь с ошибкой запроса')
    return Promise.reject(error);
  }
);

// Добавляем перехват ответов
instance.interceptors.response.use(
  function (response) {
    // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
    console.log('Здесь можете сделать что-нибудь с ответом')
    console.log(response)
    return response;
  },
  function (error) {
    // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
    console.log('Здесь можете сделать что-то с ошибкой ответа')
    return Promise.reject(error);
  }
);
