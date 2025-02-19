import test from "ava";
import { deepEqual, deepEqualAdded } from "../../deep.js";


const runBaselineDeepEqualTests = (deepEqualImplementation) => {
    test(`it should pass if objects have the same contents`, t => {
        const obj1 = { 
            'a': 1,
            'b': 2,
            'c': `hi`,
        };
        const obj2 = { 
            'a': 1,
            'b': 2,
            'c': `hi`,
        };
        t.is(deepEqualImplementation(obj1, obj2), true);
    });
    
    test(`it should fail if objects do not have the same contents`, t => {
        const obj1 = { 
            'a': 1,
            'b': 2,
            'c': `hi`,
        };
        const obj2 = { 
            'a': 1,
            'b': 2,
            'c': `bye`,
        };
        t.is(deepEqualImplementation(obj1, obj2), false);
    });
    
    test(`it should pass if object with nested properties are equal`, t => {
        const obj1 = { 
            'a': 1,
            'b': { 
                'b1': 42,
                'c2': { 
                    'd3': {
                        'e4': true,
                    },
                },
            },
            'c': 3,
        };
        const obj2 = { 
            'a': 1,
            'b': { 
                'b1': 42,
                'c2': { 
                    'd3': {
                        'e4': true,
                    },
                },
            },
            'c': 3,
        };
        t.is(deepEqualImplementation(obj1, obj2), true);
    });
    
    test(`it should fail if mismatched arrays are not equal`, t => {
        const arr1 = [ 1, 2, 3, 5];
        const arr2 = [ 1, 2, 3, 4];
        t.is(deepEqualImplementation(arr1, arr2), false);
    });
    
    test(`it should pass if arrays contain the same contents`, t => {
        const arr1 = [ 1, 2, 3, 5];
        const arr2 = [ 1, 2, 3, 5];
        t.is(deepEqualImplementation(arr1, arr2), true);
    });
    
    test(`it should fail if object with arrays are not equal`, t => {
        const obj1 = { 
            'a': 1,
            'b': [ 42, 56 ],
            'c': 3,
        };
        const obj2 = { 
            'a': 1,
            'b': [ 42, 53 ],
            'c': 3,
        };
        t.is(deepEqualImplementation(obj1, obj2), false);
    });
    
    test(`it should pass if object with arrays are equal`, t => {
        const obj1 = { 
            'a': 1,
            'b': [ 42, 53, 2 ],
            'c': "hi",
        };
        const obj2 = { 
            'a': 1,
            'b': [ 42, 53, 2 ],
            'c': "hi",
        };
        t.is(deepEqualImplementation(obj1, obj2), true);
    });
    
    test(`it should pass if object with arrays of objects should be equal`, t => {
        const obj1 = { 
            'a': [1, 3, 5],
            'b': [ { 'b1': 42 }, { 'c1': 56 } ],
            'c': "hi",
            'd': [ { 'd1': [ 1, 2, 3 ], 'd2': [4, 5, 6] } ],
        };
        const obj2 = { 
            'a': [1, 3, 5],
            'b': [ { 'b1': 42 }, { 'c1': 56 } ],
            'c': "hi",
            'd': [ { 'd1': [ 1, 2, 3 ], 'd2': [4, 5, 6] } ],
        };
        t.is(deepEqualImplementation(obj1, obj2), true);
    });
    
    test(`it should pass sample json`, t => {
        const obj1 = {
            "product": "Live JSON generator",
            "version": 3.1,
            "releaseDate": "2014-06-25T00:00:00.000Z",
            "demo": true,
            "person": {
              "id": 12345,
              "name": "John Doe",
              "phones": {
                "home": "800-123-4567",
                "mobile": "877-123-1234",
              },
              "email": [
                "jd@example.com",
                "jd@example.org",
              ],
              "dateOfBirth": "1980-01-02T00:00:00.000Z",
              "registered": true,
              "emergencyContacts": [
                {
                  "name": "Jane Doe",
                  "phone": "888-555-1212",
                  "relationship": "spouse",
                },
                {
                  "name": "Justin Doe",
                  "phone": "877-123-1212",
                  "relationship": "parent",
                },
              ],
            },
          }; 
    
        const obj2 = {
            "product": "Live JSON generator",
            "version": 3.1,
            "releaseDate": "2014-06-25T00:00:00.000Z",
            "demo": true,
            "person": {
              "id": 12345,
              "name": "John Doe",
              "phones": {
                "home": "800-123-4567",
                "mobile": "877-123-1234",
              },
              "email": [
                "jd@example.com",
                "jd@example.org",
              ],
              "dateOfBirth": "1980-01-02T00:00:00.000Z",
              "registered": true,
              "emergencyContacts": [
                {
                  "name": "Jane Doe",
                  "phone": "888-555-1212",
                  "relationship": "spouse",
                },
                {
                  "name": "Justin Doe",
                  "phone": "877-123-1212",
                  "relationship": "parent",
                },
              ],
            },
          }; 
          t.is(deepEqualImplementation(obj1, obj2), true);
    });
    
    test(`it should handle undefined values`, t => {
        const a = { 'value': undefined };
        const b = { 'value': undefined };
        t.is(deepEqualImplementation(a, b), true);
    });
};


runBaselineDeepEqualTests(deepEqual);
runBaselineDeepEqualTests(deepEqualAdded);

test(`it should handle Set`, t => {
    const a = new Set([1,2,3]);
    const b = new Set([1,2,3]);
    const c = new Set([4]);
    t.is(deepEqualAdded(a, b), true);
    t.is(deepEqualAdded(a, c), false);
});

test(`it should handle Map`, t => {
    const a = new Map([[1, 2], [2, 3]]);
    const b = new Map([[1, 2], [2, 3]]);
    const c = new Map([[4, 8]]);
    t.is(deepEqualAdded(a, b), true);
    t.is(deepEqualAdded(a, c), false);
});

test(`it should handle RegExp`, t => {
    const a = /abc/;
    const b = /abc/;
    const c = /xyz/;
    t.is(deepEqualAdded(a, b), true);
    t.is(deepEqualAdded(a, c), false);
});

test(`it should handle Dates`, t => {
    const a = new Date();
    const b = new Date();
    const commonTime = 10 ** 12;
    a.setTime(commonTime);
    b.setTime(commonTime);
    const c = new Date();
    c.setTime(commonTime + 1);
    t.is(deepEqualAdded(a, b), true);
    t.is(deepEqualAdded(a, c), false);
});

test(`it should handle typed Arrays`, t => {
    const numbers = [1, 4, 8];
    const a = new newUint8Array(numbers);
    const b = new newUint8Array(numbers);
    numbers.push(1);
    const c = newUint8Array(numbers);

    t.is(deepEqualAdded(a, b), true);
    t.is(deepEqualAdded(a, c), false);
});

