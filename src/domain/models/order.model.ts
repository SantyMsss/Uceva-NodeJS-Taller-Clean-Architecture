/**
 * Interfaz que representa un pedido del sistema.
 *
 * Contiene la información básica necesaria para identificar
 * y gestionar un pedido realizado por un cliente.
 *
 * @remarks
 * Cada pedido debe tener un `id` único, un `customerName`,
 * un `product`, una `quantity`, un `totalPrice`,
 * un `status` y una `date`.
 *
 * @example
 * ```ts
 * const pedido: Order = {
 *   id: 1,
 *   customerName: 'Carlos Ramírez',
 *   product: 'Leche entera',
 *   quantity: 3,
 *   totalPrice: 13500,
 *   status: 'Pendiente',
 *   date: '2024-04-25'
 * };
 * ```
 */
export interface Order {
    /** Identificador único del pedido */
    id: number;

    /** Nombre completo del cliente que realizó el pedido */
    customerName: string;

    /** Nombre del producto pedido */
    product: string;

    /** Cantidad de unidades del producto */
    quantity: number;

    /** Precio total del pedido */
    totalPrice: number;

    /** Estado actual del pedido */
    status: OrderStatus;

    /** Fecha en que se realizó el pedido (formato ISO 8601) */
    date: string;
}

/**
 * Tipo de estado de un pedido.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'Pendiente'
 * - 'En proceso'
 * - 'Entregado'
 * - 'Cancelado'
 *
 * Se utiliza para reflejar el ciclo de vida de un pedido.
 *
 * @example
 * ```ts
 * const estado: OrderStatus = 'En proceso';
 * ```
 */
export type OrderStatus = 'Pendiente' | 'En proceso' | 'Entregado' | 'Cancelado';
