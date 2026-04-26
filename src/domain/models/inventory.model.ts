/**
 * Interfaz que representa un registro de inventario del sistema.
 *
 * Contiene la información básica necesaria para identificar
 * y gestionar un movimiento de inventario de un producto.
 *
 * @remarks
 * Cada registro debe tener un `id` único, un `productId`,
 * un `productName`, una `quantity`, un `movements` y
 * una `lastUpdated`.
 *
 * @example
 * ```ts
 * const registro: Inventory = {
 *   id: 1,
 *   productId: 101,
 *   productName: 'Portátil Dell XPS 13',
 *   quantity: 100,
 *   movements: 'entrada',
 *   lastUpdated: '2024-06-01T12:00:00.000Z'
 * };
 * ```
 */
export interface Inventory {
    /** Identificador único del registro de inventario */
    id: number;

    /** Identificador del producto asociado */
    productId: number;

    /** Nombre del producto */
    productName: string;

    /** Cantidad de unidades del producto en inventario */
    quantity: number;

    /** Tipo de movimiento realizado */
    movements: InventoryMovement;

    /** Fecha y hora de la última actualización (formato ISO 8601) */
    lastUpdated: string;
}

/**
 * Tipo de movimiento de inventario.
 *
 * @remarks
 * Este tipo restringe los movimientos a los valores predefinidos:
 * - 'entrada': Ingreso de unidades al inventario
 * - 'salida': Egreso de unidades del inventario
 *
 * Se utiliza para reflejar el flujo de productos en el sistema.
 *
 * @example
 * ```ts
 * const movimiento: InventoryMovement = 'entrada';
 * ```
 */
export type InventoryMovement = 'entrada' | 'salida';
