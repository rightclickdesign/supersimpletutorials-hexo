/**
* Page URL Helper
* @description Remove index.html from page url
* @example
*     <%- sanitizeUrl(permalink) %>
*/
hexo.extend.helper.register('sanitizeUrl', function(path, options) {
    return this.url_for(path, options).replace(/index\.html$/, '');
});