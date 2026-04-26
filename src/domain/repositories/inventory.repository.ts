import { Inventory } from "../models/inventory.model";

/**
 * Contrato del repositorio de inventario.
 *
 * @remarks
 * Esta clase abstracta pertenece a la **capa de Domain**
 * y define el contrato que deben cumplir todas las
 * implementaciones de repositorios de inventario.
 *
 * El dominio:
 * - NO conoce detalles de infraestructura
 * - NO sabe de bases de datos, APIs o frameworks
 *
 * Cualquier fuente de datos (API, base de datos, mocks,
 * archivos, etc.) puede ser utilizada siempre que
 * implemente este contrato.
 *
 * Los casos de uso dependen de esta abstracción,
 * no de implementaciones concretas.
 *
 * @see {@link Inventory}
 */
export abstract class InventoryRepository {
  /**
   * Obtiene un listado de registros de inventario.
   *
   * @remarks
   * Este método define una **operación de negocio**
   * relacionada con la obtención de inventario,
   * sin especificar cómo ni desde dónde se obtienen.
   *
   * @param countInventories - Cantidad de registros a obtener
   * @returns Promesa que resuelve un arreglo de {@link Inventory}
   */
  abstract getAll(countInventories: number): Promise<Inventory[]>;
}
