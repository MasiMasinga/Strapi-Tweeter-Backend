'use strict';

/**
 * follow router
 */

module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/follow',
            handler: 'follow.createFollow',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/follow',
            handler: 'follow.deleteFollow',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};