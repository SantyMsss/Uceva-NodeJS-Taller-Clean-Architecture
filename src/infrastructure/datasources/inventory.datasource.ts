import { faker } from '@faker-js/faker';
import { Inventory, InventoryMovement } from "../../domain/models/inventory.model";

/**
 * Datasource encargado de generar registros de inventario simulados.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa como
 * una **fuente de datos (Datasource)**.
 *
 * Utiliza la librería {@link https://www.npmjs.com/package/@faker-js/faker | faker}
 * para generar información falsa de inventario.
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No implementa repositorios del dominio.
 *
 * Es consumida por `InventoryRepositoryImpl`, que se encarga
 * de adaptar los datos al dominio y exponerlos mediante
 * el contrato `InventoryRepository`.
 */
export class InventoryDatasource {

    /**
     * Tipos de movimiento disponibles para los registros simulados.
     *
     * @remarks
     * Se utiliza para asignar un tipo de movimiento aleatorio
     * a cada registro generado.
     */
    private movements: InventoryMovement[] = ['entrada', 'salida'];

    /**
     * Obtiene una lista de registros de inventario simulados.
     *
     * @remarks
     * Genera dinámicamente una cantidad determinada de registros
     * utilizando datos aleatorios.
     *
     * @param countInventories - Cantidad de registros a generar
     * @returns Promesa que resuelve un arreglo de {@link Inventory}
     *
     * @example
     * ```ts
     * const datasource = new InventoryDatasource();
     * const inventories = await datasource.getAll(10);
     * ```
     */
    async getAll(countInventories: number): Promise<Inventory[]> {
        const inventories: Promise<Inventory>[] = [];

        for (let i = 1; i <= countInventories; i++) {
            inventories.push(this.generateInventory(i));
        }

        return Promise.all(inventories);
    }

    /**
     * Genera un registro de inventario individual con datos simulados.
     *
     * @remarks
     * Este método es interno y no debe ser utilizado
     * fuera del datasource.
     *
     * @param id - Identificador único del registro
     * @returns Promesa que resuelve un {@link Inventory}
     */
    private generateInventory(id: number): Promise<Inventory> {
        return Promise.resolve({
            id,
            productId: faker.number.int({ min: 1, max: 1000 }),
            productName: faker.commerce.productName(),
            quantity: faker.number.int({ min: 1, max: 500 }),
            movements: faker.helpers.arrayElement(this.movements),
            lastUpdated: faker.date.recent({ days: 30 }).toISOString(),
        });
    }
}
