import { theme } from "../theme";

export const checkIfTokenExpired = (expires_in: string) => {
  const timeNow = new Date().getTime();

  const expires_in_date = new Date(expires_in).getTime();

  return expires_in_date < timeNow;
};

export const getDateNow = () => {
  const date = new Date();

  return date.toLocaleDateString("pt-BR");
};

export const convertDateIsoValidDate = (date: Date, language: string) => {
  const dateIso = new Date(date);

  return dateIso.toLocaleDateString(language);
};

export const getDescribeCurrentMonth = (date: string) => {
  const dateObj = new Date(date);
  const monthNameLong = dateObj.toLocaleString("pt-BR", { month: "long" });
  return monthNameLong;
};

export const renderCurrentDate = () => {
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();

  return date + "/" + month + "/" + year;
};

export const renderColorPriority = (priority: string) => {
  const render = {
    Média: theme.colors.warningLight,
    Alta: theme.colors.errorLight,
    Baixa: theme.colors.successLight,
  }[priority];
  return render;
};
