import { Inventory } from "../../domain/models/inventory.model";
import { InventoryRepository } from "../../domain/repositories/inventory.repository";
import { InventoryDatasource } from "../datasources/inventory.datasource";

/**
 * Implementación concreta del repositorio de inventario.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa como
 * un **adaptador (Repository Implementation)** entre:
 *
 * - El contrato del dominio {@link InventoryRepository}
 * - La fuente de datos {@link InventoryDatasource}
 *
 * Su responsabilidad es:
 * - Cumplir el contrato definido por el dominio
 * - Delegar la obtención de datos al datasource
 * - Adaptar o transformar los datos si fuese necesario
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No debe ser utilizada directamente por los casos de uso.
 *
 * Los casos de uso dependen únicamente del contrato
 * {@link InventoryRepository}, no de esta implementación.
 *
 * @see {@link InventoryRepository}
 * @see {@link InventoryDatasource}
 */
export class InventoryRepositoryImpl extends InventoryRepository {

  /**
   * Crea una nueva instancia del repositorio de inventario.
   *
   * @param datasource - Fuente de datos utilizada para
   * obtener la información de inventario
   */
  constructor(private datasource: InventoryDatasource) {
    super();
  }

  /**
   * Obtiene el listado de registros de inventario.
   *
   * @remarks
   * Implementa el método definido en
   * {@link InventoryRepository#getAll}.
   *
   * Este es el punto adecuado para:
   * - Transformar DTOs en modelos de dominio
   * - Aplicar reglas de adaptación
   * - Manejar errores o políticas de caché
   *
   * @param countInventories - Cantidad de registros a obtener
   * @returns Promesa que resuelve un arreglo de {@link Inventory}
   *
   * @example
   * ```ts
   * const repository = new InventoryRepositoryImpl(new InventoryDatasource());
   * const inventories = await repository.getAll(10);
   * ```
   */
  getAll(countInventories: number): Promise<Inventory[]> {
    return this.datasource.getAll(countInventories);
  }
}
