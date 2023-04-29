const { app } = require("./app");
const { appDataSource } = require("./app/config");

appDataSource
  .initialize()
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`),
    );
  })
  .catch(error => console.log(error));
