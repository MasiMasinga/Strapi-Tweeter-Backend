'use strict';

/**
 * comment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comment.comment', ({ strapi }) => ({
    /**
     * @param {any} data
     */
    async createComment(data) {
        const newComment = await strapi.query('api::comment.comment').create({
            data: {
                tweets: data.tweets,
                comment_text: data.comment_text,
                comment_url: data.comment_url,
                publishedAt: new Date(),
            }
        });

        return newComment;
    },

    async getComments() {
        const comments = await strapi.query('api::comment.comment').findMany({
            select: ['*'],
            populate: {
                tweets: {
                    select: ['*'],
                },
            },
            orderBy: { publishedAt: 'desc' },
        });

        return comments;
    },

    /**
     * @param {any} id
     */
    async getComment(id) {
        const comment = await strapi.query('api::comment.comment').findOne({
            where: { id },
            select: ['*'],
            populate: {
                tweets: {
                    select: ['*'],
                },
            },
        });

        return comment;
    },

    /**
     * @param {any} id
     * @param {any} data
     */
    async updateComment(id, data) {
        const updatedComment = await strapi.query('api::comment.comment').update({
            where: { id },
            data: {
                comment_text: data.comment_text,
                comment_url: data.comment_url,
            },
        });

        return updatedComment;
    },

    /**
     * @param {any} id
     */
    async deleteComment(id) {
        const deletedComment = await strapi.query('api::comment.comment').delete({
            where: { id }
        });

        return deletedComment;
    },
}));
