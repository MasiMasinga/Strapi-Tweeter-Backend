'use strict';

/**
 * auth router
 */

module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/auth/register',
            handler: 'auth.register',
            config: {
              policies: [],
              middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/auth/login',
            handler: 'auth.login',
            config: {
              policies: [],
              middlewares: [],
            },
        },
    ],
};