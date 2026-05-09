/**
 * *Detailed* documentation for the `Example` module.
 * This sample demonstrates **Monokai Kai** theme features.
 * 
 * @module ExampleJS
 * @author monokai-kai
 */

const MAX_COUNT = 100;

/**
 * Base class for example.
 */
class Base {}

/**
 * Main example class.
 */
class Example extends Base {
    /**
     * @param {string} name 
     */
    constructor(name) {
        super();
        this.name = name;
    }

    /**
     * Prints a message asynchronously.
     * @param {string} message 
     * @returns {Promise<number>}
     * @deprecated Use standard logger
     */
    async printAsync(message) {
        // Simple line comment
        const version = 1.0;
        const text = message || "Default";
        
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`${this.name}: ${text} (v${version})`);
                resolve(text.length);
            }, 100);
        });
    }

    /**
     * Static helper.
     */
    static logStatic() {
        console.info("Static call");
    }
}

/**
 * Global function with destructuring.
 * @param {Object} user 
 */
function processUser({ id, username, active = true }) {
    const status = active ? "Active" : "Inactive";
    const regex = /[A-Z]/g;
    
    console.log(`User ${id}: ${username} is ${status}`);
    return regex.test(username);
}

const arrowFunc = (x) => x * 2;
