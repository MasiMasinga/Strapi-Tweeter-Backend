'use strict';

/**
 * comment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comment.comment', ({ strapi }) => ({
    async create(ctx) {
        try {
            const { id } = ctx.params;
            const { comment_text, comment_url } = ctx.request.body;

            if (!comment_text) {
                return ctx.badRequest('Comment Text not found');
            };

            const comment = await strapi.service("api::comment.comment").createComment({
                tweets: id,
                comment_text,
                comment_url,
            });

            ctx.send(comment);
        } catch (error) {
            ctx.badRequest(error.message);
        };
    },

    async list(ctx) {
        try {

            const result = await strapi.service('api::comment.comment').getComments();

            ctx.send(result);
        } catch (error) {
            ctx.badRequest(error.message);
        };
    },

    async get(ctx) {
        try {

            const { id } = ctx.params;

            const result = await strapi.service('api::comment.comment').getComment(id);

            ctx.send(result);
        } catch (error) {
            ctx.badRequest(error.message);
        }
    },

    async update(ctx) {
        try {
            const { id } = ctx.params;
            const { comment_text, comment_url } = ctx.request.body;

            const result = await strapi.service('api::comment.comment').updateComment(id, {
                comment_text,
                comment_url,
            });

            ctx.send(result);
        } catch (error) {
            ctx.badRequest(error.message);
        };
    },

    async delete(ctx) {
        try {
            const { id } = ctx.params;

            const result = await strapi.service('api::comment.comment').deleteComment(id);

            ctx.send({ message: 'Comment deleted successfully', result });
        } catch (error) {
            ctx.badRequest(error.message);
        };
    },
}));