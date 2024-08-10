'use strict';

/**
 * like controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::like.like', ({ strapi }) => ({
    async createLikeForTweet(ctx) {
        try {

            const { id } = ctx.params;

            const result = await strapi.service('api::like.like').createLikeForTweet({
                tweet: id,
            });

            ctx.send({ message: 'Tweet has been liked successfully', data: result });
        } catch(error) {
            ctx.badRequest(error.message);
        };
    },

    async deleteLikeForTweet(ctx) {
        try {

            const { id } = ctx.params;

            const result = await strapi.service('api::like.like').deleteLikeForTweet({
                tweet: id,
            });

            ctx.send({ message: 'Tweet has been unliked successfully', data: result });
        } catch(error) {
            ctx.badRequest(error.message);
        };
    },

    async createLikeForComment(ctx) {
        try {

            const { id } = ctx.params;

            const result = await strapi.service('api::like.like').createLikeForComment({
                comment: id,
            });

            ctx.send({ message: 'Comment has been liked successfully', data: result });
        } catch(error) {
            ctx.badRequest(error.message);
        };
    },

    async deleteLikeForComment(ctx) {
        try {

            const { id } = ctx.params;

            const result = await strapi.service('api::like.like').deleteLikeForComment({
                comment: id,
            });

            ctx.send({ message: 'Comment has been unliked successfully', data: result });
        } catch(error) {
            ctx.badRequest(error.message);
        };
    },
}));