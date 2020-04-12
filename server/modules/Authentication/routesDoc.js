/**
 * @swagger
 * definitions:
 *   VerificationForLoginUser:
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 */

/**
 * @swagger
 * definitions:
 *   VerificationForRegisterUser:
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       username:
 *          type: string
 */

/**
 * @swagger
 * definitions:
 *    UserModel:
 *      properties:
 *       data:
 *           type: object
 *           properties:
 *            id:
 *               type: integer
 *            username:
 *               type: string
 *            email:
 *               type: string
 *            password:
 *               type: string
 *
 */

/**
 * @swagger
 *  /api/v1/auth/login-user:
 *    post:
 *     tags:
 *     - "Authentication"
 *     description: Use to Login User
 *     responses:
 *      "200":
 *       description: A successful response
 *       schema:
 *        type: object
 *        properties:
 *         success:
 *          type: boolean
 *         token:
 *          type: string
 *        example:
 *          message: true
 *          token: 'random jwt token'
 *      "400":
 *       description: Bad Request
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "Email and Password"
 *         required: true
 *         schema:
 *          $ref: '#/definitions/VerificationForLoginUser'
 *
 */

/**
 * @swagger
 *  /api/v1/auth/register:
 *   post:
 *     tags:
 *     - "Authentication"
 *     description: Register User
 *     responses:
 *      "200":
 *       description: A successful response
 *       schema:
 *        type: object
 *        properties:
 *         success:
 *          type: boolean
 *         token:
 *          type: string
 *        example:
 *          message: true
 *          token: 'random jwt token'
 *      "400":
 *       description: Bad Request
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "Email, Password and Username"
 *         required: true
 *         schema:
 *          $ref: '#/definitions/VerificationForRegisterUser'
 */