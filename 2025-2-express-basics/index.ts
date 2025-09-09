import { App } from "./app";

async function main() {
    const app = new App()
    // por que el await aqui?
    await app.listen()
}

main()