'use strict';

const { login } = require("../controllers/auth");

/**
 * auth service
 */

module.exports = {
    /**
     * @param {any} data
     * @param {{ badRequest: (arg0: string) => void; }} ctx
     */
    async registerUser(ctx, data) {
        const existingUser = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { email: data.email },   
        });

        if (existingUser) {
            ctx.badRequest('email already exists');
        };

        const newUser = await strapi.db.query('plugin::users-permissions.user').create({
            data: {
                username: data.username,
                email: data.email,
                password: data.password,
            },
        });

        return newUser;
    },


    /**
     * @param {any} data
     */
    async loginUser(ctx, data) {
        const user = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { email: data.email },
        });

        if (!user) {
            ctx.badRequest('User not found');
        };

        const validPassword = await strapi.plugins['users-permissions'].services.user.validatePassword(
            data.password,
            user.password
        );

        if (!validPassword) {
          ctx.badRequest('Invalid password');
        };

        const token = strapi.plugins['users-permissions'].services.jwt.issue({ id: user.id });

        return token;
    }
}