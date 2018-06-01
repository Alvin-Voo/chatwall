export class Message{
  constructor(public content: string, public created: Date,
    public type: string, public value: string,
    public status: string, public from){}
}
