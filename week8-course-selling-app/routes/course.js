function createCourseRoutes(app) {
  app.post("/course/purchase", () => {
    res.json({
      message: "Purchase endpoint.",
    });
  });

  app.post("/course/preview", () => {
    res.json({
      message: "Purchases endpoint.",
    });
  });
}

module.exports({
  createCourseRoutes: createCourseRoutes,
});
