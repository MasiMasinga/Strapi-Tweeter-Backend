'use strict';

/**
 * retweet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::retweet.retweet',({ strapi }) => ({

    /**
     * @param {any} id
     */
    async createRetweetForTweet(id) {

        const newRetweetForTweet = await strapi.query('api::retweet.retweet').create({
            data: {
                tweet: id,
                publishedAt: new Date(),
            }
        });

        return newRetweetForTweet;
    },

    /**
     * @param {any} id
     */
    async deleteRetweetForTweet(id) {
        const deleteRetweetForTweet = await strapi.query('api::retweet.retweet').delete({
            where: { tweet: id },
        });

        return deleteRetweetForTweet;
    },

    /**
     * @param {any} id
     */
    async createRetweetForComment(id) {
        const newRetweetForComment = await strapi.query('api::retweet.retweet').create({
            data: {
                comment: id,
                publishedAt: new Date(),
            }
        });

        return newRetweetForComment;
    },

    /**
     * @param {any} id
     */
    async deleteRetweetForComment(id) {
        const deleteRetweetForComment = await strapi.query('api::retweet.retweet').delete({
            where: { comment: id },
        });

        return deleteRetweetForComment;
    },
}));
