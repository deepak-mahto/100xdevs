function createUserRoutes(app) {
  app.post("/user/signup", () => {
    res.json({
      message: "Sign up endpoint.",
    });
  });

  app.post("/user/signin", () => {
    res.json({
      message: "Sign in endpoint.",
    });
  });
}

module.exports({
  createUserRoutes: createUserRoutes,
});
