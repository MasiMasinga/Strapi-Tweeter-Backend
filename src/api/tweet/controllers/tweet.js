'use strict';

/**
 * tweet controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tweet.tweet', ({ strapi }) => ({
    async create(ctx) {
        try {
            const { tweet_text, tweet_url } = ctx.request.body;

            if (!tweet_text) {
                return ctx.badRequest('tweet_text is required');
            };

            const result = await strapi.service("api::tweet.tweet").createTweet({
                tweet_text,
                tweet_url,
            });

            ctx.send(result);
        } catch (error) {
            ctx.badRequest(error.message)
        };
    },

    async list(ctx) {
        try {
            const result = await strapi.service("api::tweet.tweet").getTweets();

            ctx.send(result);
        } catch (error) {
            ctx.badRequest(error.message)
        };
    },

    async get(ctx) {
        try {
            const { id } = ctx.params;

            const result = await strapi.service("api::tweet.tweet").getTweet(id);

            ctx.send(result);
        } catch (error) {
            ctx.badRequest(error.message)
        };
    },

    async update(ctx) {
        try {
            const { id } = ctx.params;
            const { tweet_text, tweet_url } = ctx.request.body;

            if (!tweet_text) {
                return ctx.badRequest('tweet_text is required');
            };

            const result = await strapi.service("api::tweet.tweet").updateTweet(id, {
                tweet_text,
                tweet_url,
            });

            ctx.send(result);
        } catch (error) {
            ctx.badRequest(error.message)
        };
    },

    async delete(ctx) {
        try {
            const { id } = ctx.params;

            const result = await strapi.service("api::tweet.tweet").deleteTweet(id);

            ctx.send(result);
        } catch (error) {
            ctx.badRequest(error.message)
        };
    },
}));
