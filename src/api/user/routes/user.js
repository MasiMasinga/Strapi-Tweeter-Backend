'use strict';

/**
 * user router
 */

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/user',
            handler: 'user.get',
            config: {
              policies: [],
              middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/user/search',
            handler: 'user.search',
            config: {
              policies: [],
              middlewares: [],
            },
        },
    ],
};