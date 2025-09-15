# rest_api

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.21. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

## **preguntas para el profe gus:**
* por que se me repitieron los usuarios? al crear usuario al parecer me permitio crear
el mismo usuario varias veces
* como funciona el bun run? estaba intentando trabar con nodemos y ts-node pero no pude
en su lugar, solo con bun me funciona, haciendo:
    ```javascript
    "start": "bun --watch src/index.ts"
    ```
* por que tengo que tener el docker desktop ejecutando la instancia que habia creado anteriormente para que la conexion con mongo sea exitosa?
* por que hacer esto?
    ```javascript
    mongoose.Promise = Promise
    mongoose.connect(MONGO_URI)
    mongoose.connection.on('error', (error: Error) => {
    console.log(error)
    })

    app.use('/', router())
    ```
* como funciona en este caso el router? ver el index.ts de la carpeta router
* mostrar el users.ts en la carpeta db, que opina de hacerlo asi?