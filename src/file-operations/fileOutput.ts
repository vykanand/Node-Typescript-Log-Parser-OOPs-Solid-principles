import * as fs from 'fs';

export class writeJSONfile {
    fileArray = [] as any;

    pusherObjects(obj){
    this.fileArray.push(obj)
    }

    startWriter(filename,utfecoding){
    fs.writeFile (filename, JSON.stringify(this.fileArray) , utfecoding, function(err) {
        })
    }



}