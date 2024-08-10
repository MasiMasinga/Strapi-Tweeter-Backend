'use strict';

/**
 * follow service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::follow.follow', ({ strapi }) => ({
    /**
     * @param {{ follower: any; following: any; }} data
     */
    async followUser(data) {
        const follow = await strapi.db.query('api::follow.follow').create({
            data: {
                follower: data.follower,
                following: data.following,
                publishedAt: new Date(),
            },
        });

        return follow;
    },

    
    /**
     * @param {{ follower: any; }} data
     */
    async unfollowUser(data) {
        const follow = await strapi.db.query('api::follow.follow').delete({
            where: {
                follower: data.follower,
                following: data.follower,
            },
        });

        return follow;
    },
}));
