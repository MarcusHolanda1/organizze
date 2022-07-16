export const checkIfTokenExpired = (expires_in: string) => {
  const timeNow = new Date().getTime();

  const expires_in_date = new Date(expires_in).getTime();

  return expires_in_date < timeNow;
};
