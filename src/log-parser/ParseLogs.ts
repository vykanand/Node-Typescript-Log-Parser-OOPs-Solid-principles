import extract from 'extract-json-from-string';
import isodate2timestamp from 'isodate2timestamp';

export class LogParser {

    //Extract ISO Date From the provided input DYNAMICALLY (DRY Principle)
    getISODate(line: string){
    let dateInput = line.match(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/);
    let IsoDate = dateInput[0];
    return Date.parse(IsoDate);
    }
    
    //Extract Error info From the provided input DYNAMICALLY (DRY Principle)
    getErrorInfo(line: string){
    let replacable_line = line.replace(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, "");
    let ErrorDetails = replacable_line.split("-",2)[1]
    return ErrorDetails.trim();
    }

    //Extract TransactionID From the provided input if it exists in json structure DYNAMICALLY (DRY Principle)
    getTransactionID(line: string){
    let StringToObject = extract(line)[0];
    if (!('transactionId' in StringToObject)){
        return null;
    }else{
        return StringToObject.transactionId;
    }
    }


    //Get JSON Error if it exists in json structure DYNAMICALLY (DRY Principle)
    getJSONerror(line: string){
   
    let StringToObject = extract(line)[0];
    if (!('err' in StringToObject)){
        return null;
    }else{
        return StringToObject.err;
    }
    
    }

    
}