export const urlValidation = (url: string): boolean => {
  const urlRgx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  return urlRgx.test(url);
};
