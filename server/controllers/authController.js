const login = (req, res) =>
  res.oidc.login({
    returnTo: '/',
    authorizationParams: {
      redirect_uri: 'http://localhost:1234/callback',
    },
  });

const logout = (req, res) => {
  res.oidc.logout();
};

module.exports = {
  login,
  logout,
};
