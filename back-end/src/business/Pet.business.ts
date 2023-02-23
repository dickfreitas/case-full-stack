import PetDatabase from "../database/PetDatabase";
import { CustomError } from "../error/CustomError";
import { Pet } from "../models/Pet";
import { AnimalType, IAnimal } from "../services/types";

export class PetBusiness {

    constructor(private petDatabase: PetDatabase) { }

    async create(pet: IAnimal): Promise<void> {
       try{
        const { name, age, type, breed, date  , id_User} = pet
  
        if (!name || !age || !type || !breed || !date || !id_User) {
            throw new CustomError("Todos os campos precisam ser preenchidos.", 422)
        }

        if (![AnimalType.CAT, AnimalType.DOG].includes(type)) {
            throw new CustomError("Não trabalhamos com o tipo de animal fornecido", 400)
        }

        const client_Id = id_User
        
        const newPet = new Pet(
            name,
            age,
            type,
            breed,
            date,
            client_Id
        )
        
        await this.petDatabase.create(newPet)
       }catch(error : any) {
            return(error.message)
       }
        // PetDatabase.destroyConnection()
    }

    async getAllPets(): Promise<IAnimal[]> {
        const result = await this.petDatabase.getPet()

        if (!result.length) {
            throw new CustomError("Nenhum pet foi encontrado/cadastrado em nosso sistema.", 404)
        }

        return result
    }

    async getPetById(id: string): Promise<IAnimal> {
        const findPetById = await this.petDatabase.getPetById(id)

        if (!findPetById.length) {
            throw new CustomError("Pet não encontrado", 404)
        }

        return findPetById[0]
    }

    async deletePetById(id: string): Promise<number> {
        const findPet = await this.petDatabase.getPetById(id)

        if (!findPet.length) {
            throw new CustomError("Pet não encontrado", 404)
        }

        return await this.petDatabase.deletePetById(id)
    }

    async editPetId(input : any){
        try{
            const {id , newDate} = input


            if(!id || !newDate){
                throw new CustomError("Necessario informar todos os parametros" , 422)
            }

            await this.petDatabase.editPetId(input)
           
            return ("Data alterada com sucesso")   
        }catch(error: any){
            return(error.message)
        }
    }

}