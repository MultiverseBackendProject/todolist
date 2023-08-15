const login = (req, res) =>
  res.oidc.login({
    returnTo: '/',
    authorizationParams: {
      redirect_uri: 'http://localhost:3000/callback',
    },
  });

const logout = (req, res) => {
  res.oidc.logout();
};

module.exports = {
  login,
  logout,
};
