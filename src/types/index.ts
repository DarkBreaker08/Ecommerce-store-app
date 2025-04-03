export type Product = {
  id: string;
  name: string;
  brand: string;
  price: string;
};

export type Products = Product[];

export type Contact = {
  address: string;
  phone: string;
  openHours: string;
  officeAdress: string;
  email: string;
  officeHours: string;
};

export type UserEmail = {
  email: string;
  id: string;
};

export type UserEmailDto = Omit<UserEmail, "id">;

export type Blog = {
  id: string;
  title: string;
  text: string;
};

export type Blogs = Blog[];

export type CustomerOpinion = {
  name: string;
  email: string;
  subject: string;
  message: string;
  id: string;
};

export type CustomerOpinionDto = Omit<CustomerOpinion, "id">;
