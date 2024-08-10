'use strict';

/**
 * follow controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::follow.follow', ({ strapi }) => ({
    async createFollow(ctx) {
        try {
            const { followerId, followingId } = ctx.request.body;

            const result = await strapi.service('api::follow.follow').followUser({
                follower: followerId,
                following: followingId,
            })

            ctx.send({ message: 'Followed successfully', data: result });
        } catch (error) {
            ctx.badRequest(error.message);
        }
    },

    async deleteFollow(ctx) {
        try {
            const { followerId, followingId } = ctx.request.body;

            const result = await strapi.service('api::follow.follow').unfollowUser({
                follower: followerId,
                following: followingId,
            });

            ctx.send({ message: 'Unfollowed successfully', data: result });
        } catch (error) {
            ctx.badRequest(error.message);
        }
    },
}));