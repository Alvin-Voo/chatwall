export class User{

  constructor(public avatar:string, public name:string,
    public dob:Date, public email:string,
    public address:string, public hobbies:string, public password?: string,
    public friends?: User[], public friends_requests?: User[], public online?: boolean){}

}
