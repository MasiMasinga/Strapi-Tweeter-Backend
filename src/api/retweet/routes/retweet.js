'use strict';

/**
 * retweet router
 */

module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/tweet/:id/retweet',
            handler: 'retweet.createRetweetForTweet',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/tweet/:id/retweet',
            handler: 'retweet.deleteRetweetForTweet',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/comment/:id/retweet',
            handler: 'retweet.createRetweetForComment',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/comment/:id/retweet',
            handler: 'retweet.deleteRetweetForComment',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};