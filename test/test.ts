import { LogParser } from '../src/log-parser/ParseLogs';
import { expect } from 'chai';

import 'mocha';

describe('LogParser ISO Function check', () => {
  it('LogParser getISODate should return valid ISO String', () => {
    let logParser = new LogParser();
    let result = logParser.getISODate('2021-08-09T02:12:51.264Z - warn - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service finished with error","code":404,"err":"Cannot find user orders list"}');
    
    expect(result).to.equal('2021-08-09T02:12:51.264Z');
  });
});




describe('LogParser getErrorInfo Function check', () => {
  it('LogParser getErrorInfo should return valid error eg. debug/info etc', () => {
    let logParser = new LogParser();
    let result = logParser.getErrorInfo('2021-08-09T02:12:51.264Z - warn - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service finished with error","code":404,"err":"Cannot find user orders list"}');
    
    expect(result).to.equal('warn');
  });
});




describe('LogParser getTransactionID Function check', () => {
  it('LogParser getTransactionID should return valid TransactionID', () => {
    let logParser = new LogParser();
    let result = logParser.getTransactionID('2021-08-09T02:12:51.264Z - warn - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service finished with error","code":404,"err":"Cannot find user orders list"}');
    
    expect(result).to.equal('9abc55b2-807b-4361-9dbe-aa88b1b2e978');
  });
});



describe('LogParser getJSONerror Function check', () => {
  it('LogParser getJSONerror should return valid error inside json object', () => {
    let logParser = new LogParser();
    let result = logParser.getJSONerror('2021-08-09T02:12:51.264Z - warn - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service finished with error","code":404,"err":"Cannot find user orders list"}');
    
    expect(result).to.equal('Cannot find user orders list');
  });
});