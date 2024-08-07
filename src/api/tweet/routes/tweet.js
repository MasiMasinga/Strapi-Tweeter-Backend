'use strict';

/**
 * tweet router
 */

module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/tweet',
            handler: 'tweet.create',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/tweets',
            handler: 'tweet.list',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/tweet/:id',
            handler: 'tweet.get',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/tweet/:id',
            handler: 'tweet.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/tweet/:id',
            handler: 'tweet.delete',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};