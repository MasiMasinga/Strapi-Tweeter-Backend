"use strict";

/**
 * user controller
 */

module.exports = {
    /**
     * @param {{ send: (arg0: { message: string; data: any[]; }) => void; badRequest: (arg0: any) => void; }} ctx
     */
    async get(ctx) {
        try {

            const result = await strapi.query('plugin::users-permissions.user').findMany();

            ctx.send({ message: 'User fetched successfully', data: result });
        } catch (error) {
            ctx.badRequest(error.message);
        }
    },

    /**
     * @param {{ request: { query: { email: any; username: any; }; }; send: (arg0: { message: string; data: any[]; }) => void; badRequest: (arg0: any) => void; }} ctx
     */
    async search(ctx) {
        try {

            const { email, username } = ctx.request.query;

            const filters = {};

            if (email) {
                filters.email = { $containsi: email };
            };

            if (username) {
                filters.username = { $containsi: username };
            };

            const result = await strapi.query('plugin::users-permissions.user').findMany({
                where: filters,
            });

            ctx.send({ message: 'User fetched successfully', data: result });
        } catch (error) {
            ctx.badRequest(error.message);
        }
    },
}