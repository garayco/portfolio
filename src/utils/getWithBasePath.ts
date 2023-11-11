export const getWithBasePath = (url?: string) =>
  `${import.meta.env.BASE_URL}${url ? url : ""}`;
