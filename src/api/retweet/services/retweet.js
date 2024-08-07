'use strict';

/**
 * retweet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::retweet.retweet');
