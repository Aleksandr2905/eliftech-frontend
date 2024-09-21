export interface User {
  _id: string;
  fullName: string;
  email: string;
}

export interface Event {
  _id: string;
  title: string;
  user: User[];
}
