import { Pet } from "../models/Pet";
import { PetRepository } from "../models/PetRepository";
import { IAnimal } from "../services/types";
import { Database } from "./connection";

const pet_table = "record_pet"

export default class PetDatabase extends Database implements PetRepository {
  public async deletePetById(id: string): Promise<number> {
    return await Database.connection(pet_table).delete().where({id})
  }

  public async getPetById(id: string): Promise<IAnimal[]> {
    return await Database.connection(pet_table).select("*").where({ id })
  }

  public async getPet(): Promise<IAnimal[]> {
    const result = await Database.connection(pet_table).select("*").orderBy("date" , "asc")
    
    return result
  }

  public async create(pet: Pet): Promise<void> {
    return await Database.connection(pet_table).insert(pet)
  }

  public async editPetId(input : any) {
    return await Database.connection(pet_table).update({"date" : input.newDate }).where({id : input.id})
  }
}