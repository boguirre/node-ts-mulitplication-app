import { log } from "console";
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit : number;
    showTable: boolean;
    nameFile: string;
    destination: string;
}

export class ServerApp {
    
    static run({ base, limit, showTable, nameFile, destination }: RunOptions) {
        console.log('Server run');
        
        const table = new CreateTable().execute({ base, limit });

        const wasCreated = new SaveFile()
        .execute({ 
            fileContent: table,
            destination,
            fileName: nameFile
        }); 

        if( showTable ) console.log(table);

        (wasCreated) ? console.log('File created') : console.error('File not created');
        
        
    }
}