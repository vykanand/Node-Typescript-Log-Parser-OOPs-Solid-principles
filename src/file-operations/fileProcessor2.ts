
import LineByLineReader from "line-by-line";
import * as fs from 'fs';
import { LogParser } from '../log-parser/ParseLogs';
import { writeJSONfile } from '../file-operations/fileOutput';

// IMPORTANT: We are now reading the line of files from file directly instead of loading it into the memory
// Which makes our computation faster 

// Now 500 MB app.log File takes just ~30 seconds to read and write errors

//OUR READ readLogFile now EXTENDS LogParser so that we call call file operations from  inside this file processor

export class readLogFile extends LogParser {
  
  //This is asynchronous File Processor to read our log files line by line and Parse
  //the Data according to our requirements this function can be reused with big files 
  //because its asynchronous and can handle large LOG files (DRY Principle)

  async processLines (inputstream,outputstream) {
    
    
    let lr = new LineByLineReader(inputstream);
    let file_write = new writeJSONfile();


    lr.on('error', (err) => {
         console.log(err);
    });
    
    lr.on('line', async (line) => {
      
        if(line.match(/- error -/gm)){          

        //by collecting out object in pusherObject function we are making a collection of all objects so we can write it to file at once.This will make our write operation faster 

        //  this.pusherObjects will give us Access to function from writeJSONfile class directly
        file_write.pusherObjects({"timestamp":this.getISODate(line),"loglevel":this.getErrorInfo(line),"transactionId":this.getTransactionID(line),"err":this.getJSONerror(line)})
           
        }
    });
    

    lr.on('end', () => {

      //  this.startWriter will give us Access to function from writeJSONfile class directly

    file_write.startWriter(outputstream,'utf-8')
    // All lines are read, file is closed now.
    console.log(outputstream+' written successfully Time taken in (seconds) :- ' + (performance.now()/1000).toFixed(0) + ' seconds');
    });

  

  }


}