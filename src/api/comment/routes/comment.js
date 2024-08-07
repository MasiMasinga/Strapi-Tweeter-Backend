'use strict';

/**
 * comment router
 */

module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/tweets/:id/comments',
            handler: 'comment.create',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/comments',
            handler: 'comment.list',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/comment/:id',
            handler: 'comment.get',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/comment/:id',
            handler: 'comment.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/comment/:id',
            handler: 'comment.delete',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};