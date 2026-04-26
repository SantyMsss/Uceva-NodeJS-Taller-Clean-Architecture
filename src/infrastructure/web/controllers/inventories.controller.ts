import { Request, Response } from "express";
import { GetAllInventoriesUseCase } from "../../../application/usecases/get-all-inventories.usecase";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP para operaciones relacionadas con inventario.
 *
 * @remarks
 * Esta clase pertenece a la **capa más externa** de la aplicación
 * (*Frameworks & Drivers*), y su responsabilidad es:
 *
 * - Recibir solicitudes HTTP
 * - Extraer parámetros de la request
 * - Delegar la lógica al caso de uso correspondiente
 * - Transformar la respuesta del caso de uso en una respuesta HTTP
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No accede directamente a repositorios ni datasources.
 *
 * Depende del caso de uso {@link GetAllInventoriesUseCase}.
 */
export class InventoriesController {

  /**
   * Crea una nueva instancia del controlador de inventario.
   *
   * @param getAllInventoriesUseCase - Caso de uso encargado
   * de obtener el listado de registros de inventario
   */
  constructor(private getAllInventoriesUseCase: GetAllInventoriesUseCase) {}

  /**
   * Maneja la petición HTTP para obtener registros de inventario.
   *
   * @remarks
   * Extrae el parámetro `countInventories` desde la URL,
   * ejecuta el caso de uso correspondiente y devuelve
   * la respuesta en formato JSON.
   *
   * Incluye un `setTimeout` únicamente con fines
   * demostrativos (simulación de latencia).
   *
   * Los errores son delegados al manejador centralizado
   * {@link HandleError}.
   *
   * @param req - Objeto Request de Express
   * @param res - Objeto Response de Express
   */
  getAllInventories = (req: Request, res: Response): void => {
    const { countInventories } = req.params;

    setTimeout(() => {
      this.getAllInventoriesUseCase
        .execute(Number(countInventories))
        .then((inventories) => res.status(201).json(inventories))
        .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
