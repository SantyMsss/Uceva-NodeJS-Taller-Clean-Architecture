import { Router } from "express";
import { InventoryDatasource } from "../../datasources/inventory.datasource";
import { InventoryRepositoryImpl } from "../../repositories/inventory.repository.impl";
import { GetAllInventoriesUseCase } from "../../../application/usecases/get-all-inventories.usecase";
import { InventoriesController } from "../controllers/inventories.controller";

export class InventoriesRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new InventoryRepositoryImpl(new InventoryDatasource());
    const getAllInventories = new GetAllInventoriesUseCase(repository);
    const controller = new InventoriesController(getAllInventories);

    /**
     * @openapi
     * /api/inventories/{countInventories}:
     *   get:
     *     summary: Obtener listado de inventario
     *     description: Retorna una lista de registros de inventario generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Inventories
     *     parameters:
     *       - in: path
     *         name: countInventories
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de registros de inventario a generar
     *     responses:
     *       201:
     *         description: Lista de registros de inventario generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Inventory'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countInventories", controller.getAllInventories);

    return router;
  }
}
