/**
 * *Detailed* documentation for the `Example` module.
 * This sample demonstrates **Monokai Kai** theme features.
 *
 * @module ExampleModule
 * @author monokai-kai
 * @see {@link http://github.com/monokai-kai}
 */


/**
 * Base class for examples.
 */
export class Base {}

/**
 * Dummy Component decorator.
 */
export function Component(config: any) {
    return (target: any) => {};
}

/**
 * Data structure representing a user record.
 * @since 1.0.0
 */
export type UserRecord = {
    readonly id: number;
    username: string;
    /** @deprecated Use `status` instead */
    active?: boolean;
};

/**
 * Interface for objects that can be printed.
 * @template T The type of the content to print.
 */
export interface Printable<T = string> {
    /**
     * Prints the content.
     * @param content The **content** to print.
     */
    print(content: T): void;
}

/**
 * Main example class demonstrating various TS features.
 */
@Component({
    selector: 'app-example'
})
export class Example<T extends Base> extends Base implements Printable<string> {
    /** Static version identifier. */
    public static readonly VERSION: string = "1.2.0";

    private _name: string;
    public status: AppStatus = AppStatus.Active;

    constructor(name: string) {
        super();
        this._name = name;
    }

    /**
     * Prints a formatted message.
     * @param message The message to *display*.
     * @param count Optional repetition count.
     * @returns The length of the printed message.
     * @deprecated Use `logger.info()` instead.
     */
    public print(message: string, count: number = 1): number {
        // Simple line comment
        /* Block comment */
        const version: number = 1.0;
        const regex: RegExp = /^[a-z0-9_-]+$/i;
        const template: string = `${this._name}: ${message} (v${version}), ${regex}`;

        console.log(template);
        return template.length;
    }

    /**
     * Static helper method.
     */
    public static logStatic(): void {
        console.info("Static call from " + Example.VERSION);
    }
}

/**
 * Application status enumeration.
 */
export enum AppStatus {
    Active = 0,
    Inactive = 1,
    /** @deprecated */
    Pending = 2
}
