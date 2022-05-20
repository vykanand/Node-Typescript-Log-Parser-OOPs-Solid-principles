export class readArgs {
    
    //We use this helper Class to read the 1st and 2nd arguments from command line 
    //from here we derive our input and output files to read and write.
   input: any;
   output: any;
    
    constructor(input: any,output: any) {
        this.input = this.inputArgs();
        this.output = this.outputArgs();
    }
    // public allArgs(){
    //     return process.argv.slice(2)
    // }

    public inputArgs(){
       return process.argv.slice(2)[1]
    }

    public outputArgs(){
        return process.argv.slice(2)[3]
    }



}