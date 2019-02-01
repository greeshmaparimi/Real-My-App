export class Todo {
  constructor(
    public username: string,
    public emailid: string,
    public password: string,
    public phnnum: string,
    public gender: string
  ) {}
}

export interface User {
  username: string;
  emailid: string;
  password: string;
  phnnum: string;
  gender: string;
}
