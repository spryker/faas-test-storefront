const serverless = require('serverless-http');

const { createServer } = require('@vue-storefront/middleware');

const middlewareConfig = {
  integrations: {
    spryker: {
      location: '@spryker-vsf/api/server',
      configuration: {
        axiosConfig: {
          baseURL:
            process.env.GLUE_BASE_URL ||
            process.env.API_URL ||
            'https://glue.us.sc-b2b.demo-spryker.com',
        },
        currency: process.env.CURRENCY_DEFAULT || 'USD',
        locale: process.env.LOCALE_DEFAULT || 'en_US',
      },

      extensions: (extensions) => [
        ...extensions,
        require('@spryker-vsf/catalog-search-suggestions/extension'),
        require('@spryker-vsf/oidc-client/extension'),
        require('@spryker-vsf/oidc/extension'),
      ],
    },
  },
};

function middlewareHandler() {
    const app = createServer(middlewareConfig);
    const server = serverless( app );
    return (event, ctx, callback) => {
        return server(event, ctx, callback)
    }
}

exports.handler = middlewareHandler()
