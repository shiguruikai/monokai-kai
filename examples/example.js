/**
 * Doc comment: Example JavaScript file.
 */
const MAX_COUNT = 100;

class Example extends Base {
    constructor(name) {
        super();
        this.name = name; // Property
    }

    print(message) {
        // Simple comment
        const version = 1;
        console.log(message, version);
    }
}

function globalFunc(param1) {
    return param1 * 2;
}
