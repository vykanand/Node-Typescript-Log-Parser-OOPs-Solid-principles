import * as fs from 'fs';
import * as readline from 'readline';
import { LogParser } from '../log-parser/ParseLogs';


export class readLogFile {
  
  //This is asynchronous File Processor to read our log files line by line and Parse
  //the Data according to our requirements this function can be reused with big files 
  //because its asynchronous and can handle large LOG files (DRY Principle)
  async processLines (inputstream) {

  const fileStream = fs.createReadStream(inputstream);

  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.
  let resultLines = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  
 
 
  let returnArray = [];
  for await (let line of resultLines) {
    // Each line in input file will be successively available here as `line`.
    
   
    //Calling our log parser to put our desired values as per the expected output
    let logParser = new LogParser();

    await returnArray.push({"timestamp":logParser.getISODate(line),"loglevel":logParser.getErrorInfo(line),"transactionId":logParser.getTransactionID(line),"err":logParser.getJSONerror(line)})
  }

  return returnArray;
  }


}