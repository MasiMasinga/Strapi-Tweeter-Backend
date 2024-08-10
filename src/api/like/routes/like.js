'use strict';

/**
 * like router
 */

module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/tweet/:id/like',
            handler: 'like.createLikeForTweet',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/tweet/:id/like',
            handler: 'like.deleteLikeForTweet',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/comment/:id/like',
            handler: 'like.createLikeForComment',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/comment/:id/like',
            handler: 'like.deleteLikeForComment',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};