const apiPath = '/api/v1';

const routes = {
  // login: () => [apiPath, 'login'].join('/'),
  // usersPath: () => [apiPath, 'data'].join('/'),
  signUp: () => [apiPath, 'signup'].join('/'),
  pageNotFound: () => '*',
  pageMain: () => '/',
  pageLogin: () => '/login',
  pageSignUp: () => '/signup',
};

export default routes;
