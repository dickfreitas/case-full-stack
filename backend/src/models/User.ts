import { IdGenerator } from "../services/IdGeneration";

export class Client {
  private id?: string
  constructor(
    private name: string,
    private adress: string,
    private adress_number: string,
    private phone: string
    ) {
    if (!this.id) {
      this.id = this.id = new IdGenerator().generateId()
    }
  }
}
