// We have used file processor Version 2 for optimising read speeds
import { readLogFile } from './file-operations/fileProcessor2';
import { writeJSONfile } from './file-operations/fileOutput';
import { readArgs } from "./utils/arg-helper";
import { parserInterface } from "./utils/parser-interface";


//CLASSIC SOLID / OOPS BASED EXAMPLE
// Extending a class is this is more of inheritance type concept from OOPS also extending Parser will give us performing us functionalities to read CLI arguments

// To Demonstrate OOPS Polymorphism concept we have enforced interface to the Parser class by using implements
 // Implementing parserInterface will type-checked Parser class object and enforce a structure that Parser class must follow

export default class Parser extends readArgs implements parserInterface {

    mainArgs: string;
    constructor(mainArgs: string, input:string, output:string) {
         
         super(input,output);

         // console.log(input,output);  HERE CONSOLE WILL GIVE US parameters 'ProcessArguments','acceptInput','releaseOutput' which has been passed as arguments at the bottom with Parser class

        
         //Here we will get the variables input and output gets values from ReadArg Class which is the parent of Parser class so with this keyword we can access variables of arg-helper.ts file
         // console.log(this.input,this.output);

       
        // //Reading Log file
        let reader = new readLogFile();
        
        // //Get the Log file content and Process it line by line
        reader.processLines(this.input,this.output) // we get input and output variable values from arg-helper.ts and pass it to processLines
 
    }


}

new Parser('ProcessArguments','acceptInput','releaseOutput');


