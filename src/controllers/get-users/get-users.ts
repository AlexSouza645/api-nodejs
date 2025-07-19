import { iGetUsersControllers, iGetUsersRepository } from "./protocols";
export class getUsersController implements iGetUsersControllers {
  // esse constructor que ira se comunicar com o banco de dados mongodb
  constructor(private readonly getUsersRepository: iGetUsersRepository) {}

  // para simplificar podemos apagar o this.getUsersRepository = getUsersRepository; e
    //     getUsersRepository: iGetUsersRepository; e no constructor escrever private readonly
    

// criar função assincrona do handle 
    async handle() {
      
        const users = await this.getUsersRepository.getUsers()
    // validar a requisição
    // direcionar chamada para o repositor
  }
}
