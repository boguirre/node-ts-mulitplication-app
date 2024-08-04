import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

//console.log(yarg);

(async() => {
    await main();
})();

async function main() {

    const { b:base, l:limit, s:showTable, n:nameFile, d:destination } = yarg;    
    ServerApp.run({ base, limit, showTable, nameFile, destination });
    
}
