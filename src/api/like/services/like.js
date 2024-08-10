'use strict';

/**
 * like service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::like.like', ({ strapi }) => ({


    /**
     * @param {any} id
     */
    async createLikeForTweet(id) {
        const likedTweet = await strapi.query('api::like.like').create({
            data: {
                tweet: id.tweet,
                publishedAt: new Date(),
            }
        });

        return likedTweet;
    },


    /**
     * @param {any} id
     */
    async deleteLikeForTweet(id) {
        const unlikedTweet = await strapi.query('api::like.like').delete({
            where: { tweet: id.tweet },
        });

        return unlikedTweet;
    },


    /**
     * @param {any} id
     */
    async createLikeForComment(id) {
        const likedComment = await strapi.query('api::like.like').create({
            data: {
                comment: id.comment,
                publishedAt: new Date(),
            }
        });

        return likedComment;
    },


    /**
     * @param {any} id
     */
    async deleteLikeForComment(id) {
        const unlikedComment = await strapi.query('api::like.like').delete({
            where: { comment: id.comment },
        });

        return unlikedComment;
    },
}));
