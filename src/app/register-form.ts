export class RegisterForm {
  constructor(
    public firstname: string,
    public lastname: string,
    public id: number,
    public department: string,
    public mobile: number,
    public address: string,
    public gender: string,
    public password: string,
    public confirmpassword: string,
    public email: string
  ){}
}
