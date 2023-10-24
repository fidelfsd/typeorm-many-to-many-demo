import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

// -----------------------------------------------------------------------------

class UserController {
   // Ruta para obtener todos los usuarios
   static async getAllUsers(req: Request, res: Response) {
      try {
         const userRepository = AppDataSource.manager.getRepository(User);
         const users = await userRepository.find({
            relations: {
               tasks: true,
            },
         });
         if (users.length > 0) {
            res.json(users);
         } else {
            res.status(404).json({ error: "No hay usuarios" });
         }
      } catch (error) {
         res.status(500).json({ error: "Error al obtener los usuarios" });
      }
   }

   // Ruta para obtener un usuario por su ID
   static async getUserById(req: Request, res: Response) {
      const userId = parseInt(req.params.id);

      const userRepository = AppDataSource.manager.getRepository(User);
      const user = await userRepository.findOne({
         where: {
            id: userId,
         },
         relations: {
            tasks: true,
         },
      });

      if (user) {
         res.json(user);
      } else {
         res.status(404).json({ error: "Usuario no encontrado" });
      }
   }
}

export default UserController;
