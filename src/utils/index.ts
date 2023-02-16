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
  const currentDate = new Date().toLocaleString("pt-BR", {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  });

  return currentDate;
};

export const renderColorPriority = (priority: string) => {
  const render = {
    Média: theme.colors.warningLight,
    Alta: theme.colors.errorLight,
    Baixa: theme.colors.successLight,
  }[priority];
  return render;
};

export const renderColorTaskStatus = (status: string) => {
  const render = {
    completed: theme.colors.successLight,
    inProgress: theme.colors.pending,
    notCompleted: theme.colors.error,
  }[status];
  return render;
};
