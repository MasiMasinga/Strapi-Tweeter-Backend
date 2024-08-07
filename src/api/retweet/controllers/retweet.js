'use strict';

/**
 * retweet controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::retweet.retweet', ({ strapi }) => ({
    async createRetweetForTweet(ctx) {
        try {
            const { id } = ctx.params;

            const retweet = await strapi.service('api::retweet.retweet').createRetweetForTweet(id);

            ctx.send(retweet);
        } catch (error) {
            ctx.badRequest(error.message);
        };
    },

    async deleteRetweetForTweet(ctx) {
        try {
            const { id } = ctx.params;

            const retweet = await strapi.service('api::retweet.retweet').deleteRetweetForTweet(id);

            ctx.send(retweet);
        } catch (error) {
            ctx.badRequest(error.message);
        };
    },

    async createRetweetForComment(ctx) {
        try {
            const { id } = ctx.params;

            const retweet = await strapi.service('api::retweet.retweet').createRetweetForComment(id);
            
            ctx.send(retweet);
        } catch (error) {
            ctx.badRequest(error.message);
        }
    },

    async deleteRetweetForComment(ctx) {
        try {
            const { id } = ctx.params;

            const retweet = await strapi.service('api::retweet.retweet').deleteRetweetForComment(id);

            ctx.send(retweet);
        } catch (error) {
            ctx.badRequest(error.message);
        }
    },
}));
