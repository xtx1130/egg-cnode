'use strict';

const Controller = require('egg').Controller;

class GithubController extends Controller {
  async new() {
    const { ctx } = this;
    await ctx.render('sign/new_oauth.html', {
      actionPath: '/auth/github/create',
    });
  }
}

module.exports = GithubController;
