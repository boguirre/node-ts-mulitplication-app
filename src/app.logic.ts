import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const { b:base, l:limit, s:showTable } = yarg; 

let outputMessage = '';
const welcomeMessage = `
==================================
        Tabla del ${base}
==================================\n
`;

for( let i = 1; i <= limit; i++ ){
    outputMessage += `${base} x ${i} = ${base * i }\n`;
}
outputMessage = welcomeMessage + outputMessage;
if (showTable) {
    console.log(outputMessage);
}

const outputPath = `outputs/folder1`;

fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('file created');


