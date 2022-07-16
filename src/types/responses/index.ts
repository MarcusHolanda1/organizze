export type DataUser = {
  family_name: string;
  name: string;
  picture: string;
  locale: string;
  given_name: string;
  id: string;
  email: string;
  error: {
    code: number;
    message: string;
    status: string;
  };
};
