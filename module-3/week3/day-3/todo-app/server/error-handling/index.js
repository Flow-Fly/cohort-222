module.exports = (app) => {
  // TODO - 404 middleware: this middleware runs whenever requested page is not available
  app.use((req, res, next) => {
  });

  // TODO - 500 error middleware: whenever you call next(err), this middleware will handle the error 
  app.use((err, req, res, next) => {
  });
};
