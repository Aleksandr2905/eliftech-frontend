export interface User {
  _id: string;
  fullName: string;
  email: string;
  createdAt?: string;
}

export interface Event {
  _id: string;
  title: string;
  user: User[];
}
