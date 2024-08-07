'use strict';

/**
 * tweet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tweet.tweet', ({ strapi }) => ({
    
    /**
     * @param {{ tweet_text: any; tweet_url: any; }} data
     */
    async createTweet(data) {
        const newTweet = await strapi.query('api::tweet.tweet').create({
            data: {
                tweet_text: data.tweet_text,
                tweet_url: data.tweet_url,
                publishedAt: new Date(),
            }
        });

        return newTweet;
    },


    async getTweets() {
        const tweets = await strapi.query('api::tweet.tweet').findMany();

        return tweets;
    },


    /**
     * @param {any} id
     */
    async getTweet(id) {
        const tweet = await strapi.query('api::tweet.tweet').findOne({
            where: {
                id,
            }
        });

        return tweet;
    },

   
    /**
     * @param {any} id
     * @param {{ tweet_text: any; tweet_url: any; }} data
     */
    async updateTweet(id, data) {
        const updatedTweet = await strapi.query('api::tweet.tweet').update({
            where: {
                id,
            },
            data: {
                tweet_text: data.tweet_text,
                tweet_url: data.tweet_url,
            }
        });

        return updatedTweet;
    },

  
    /**
     * @param {any} id
     */
    async deleteTweet(id) {
        const deletedTweet = await strapi.query('api::tweet.tweet').delete({
            where: {
                id,
            }
        });

        return deletedTweet;
    },
}));
