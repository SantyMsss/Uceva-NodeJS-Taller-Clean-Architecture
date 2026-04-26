/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa un pedido del sistema
 *       required:
 *         - id
 *         - customerName
 *         - product
 *         - quantity
 *         - totalPrice
 *         - status
 *         - date
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         customerName:
 *           type: string
 *           example: Carlos Ramírez
 *         product:
 *           type: string
 *           example: Leche entera
 *         quantity:
 *           type: number
 *           example: 3
 *         totalPrice:
 *           type: number
 *           example: 13500
 *         status:
 *           type: string
 *           enum:
 *             - Pendiente
 *             - En proceso
 *             - Entregado
 *             - Cancelado
 *           example: Pendiente
 *         date:
 *           type: string
 *           format: date
 *           example: 2024-04-25
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     Inventory:
 *       type: object
 *       description: Representa un registro de inventario del sistema
 *       required:
 *         - id
 *         - productId
 *         - productName
 *         - quantity
 *         - movements
 *         - lastUpdated
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         productId:
 *           type: number
 *           example: 101
 *         productName:
 *           type: string
 *           example: Portátil Dell XPS 13
 *         quantity:
 *           type: number
 *           example: 100
 *         movements:
 *           type: string
 *           enum:
 *             - entrada
 *             - salida
 *           example: entrada
 *         lastUpdated:
 *           type: string
 *           format: date-time
 *           example: 2024-06-01T12:00:00.000Z
 */
export {};