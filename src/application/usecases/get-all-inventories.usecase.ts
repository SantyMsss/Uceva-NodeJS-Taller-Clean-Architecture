import { Inventory } from "../../domain/models/inventory.model";
import { InventoryRepository } from "../../domain/repositories/inventory.repository";

/**
 * Caso de uso para obtener un listado de registros de inventario.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Application**
 * y representa una **regla de negocio de la aplicación**.
 *
 * Su responsabilidad es:
 * - Orquestar la obtención de registros de inventario
 * - Coordinar la interacción con el repositorio
 *
 * ❗ No conoce detalles de infraestructura.
 * ❗ No depende de implementaciones concretas.
 *
 * Depende únicamente del contrato
 * {@link InventoryRepository} definido en el dominio.
 *
 * @see {@link InventoryRepository}
 * @see {@link Inventory}
 */
export class GetAllInventoriesUseCase {

  /**
   * Crea una nueva instancia del caso de uso.
   *
   * @param inventoryRepository - Repositorio de inventario
   * utilizado para acceder a los datos
   */
  constructor(private inventoryRepository: InventoryRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @remarks
   * Obtiene una cantidad determinada de registros de inventario
   * delegando el acceso a datos al repositorio.
   *
   * Aquí se pueden agregar:
   * - Validaciones de entrada
   * - Reglas de negocio simples
   * - Orquestación de múltiples repositorios
   *
   * @param countInventories - Cantidad de registros a obtener
   * @returns Promesa que resuelve un arreglo de {@link Inventory}
   *
   * @example
   * ```ts
   * const useCase = new GetAllInventoriesUseCase(inventoryRepository);
   * const inventories = await useCase.execute(10);
   * ```
   */
  execute(countInventories: number): Promise<Inventory[]> {
    return this.inventoryRepository.getAll(countInventories);
  }
}
