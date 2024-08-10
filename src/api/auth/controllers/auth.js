"use strict";

/**
 * user controller
 */

module.exports = {
    /**
   * @param {{ request: { body: { username: any; email: any; password: any; }; }; badRequest: (arg0: string) => void; send: (arg0: { message: string; user: any; }) => void; }} ctx
   */
    async register(ctx) {
        try {
          const { username, email, password } = ctx.request.body;
        
          if (!username) {
              ctx.badRequest('username is required');
          };
  
          if (!email) {
              ctx.badRequest('email is required');
          };
  
          if (!password) {
              ctx.badRequest('password is required');
          };

          const existingUser = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { email },
          });

          if (existingUser) {
            ctx.badRequest('email already exists');
          };

          const newUser = await strapi.db.query('plugin::users-permissions.user').create({
            data: {
              username,
              email,
              password,
            }
          });
      
          ctx.send({ message: 'User created successfully', user: newUser });
        } catch (error) {
          ctx.badRequest(error.message);
        };
    },

    /**
   * @param {{ request: { body: { email: any; password: any; }; }; badRequest: (arg0: string) => void; send: (arg0: { message: string; data: any; }) => void; }} ctx
   */
    async login(ctx) {
        try {
          const { email, password } = ctx.request.body;
        
          if (!email) {
              ctx.badRequest('email is required');
          };
  
          if (!password) {
              ctx.badRequest('password is required');
          };

          const user = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { email },
          });

          if (!user) {
            ctx.badRequest('User not found');
          };

          const validPassword = await strapi.plugins['users-permissions'].services.user.validatePassword(password, user.password);

          if (!validPassword) {
            ctx.badRequest('Invalid password');
          };

          const token = strapi.plugins['users-permissions'].services.jwt.issue({ id: user.id });

          ctx.send({ message: 'User logged in successfully', data: token });
        } catch (error) {
          ctx.badRequest(error.message);
        };
    },
};
