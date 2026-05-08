/**
 * Doc comment: Example TypeScript file.
 */
import { Component } from './base';

@Component({
    selector: 'app-example'
})
export class Example<T> extends Base implements Printable {
    public static readonly VERSION = "1.0.0";
    
    private readonly name: string;
    public status: Status = Status.Active;

    constructor(name: string) {
        super();
        this.name = name; // Property
    }

    /**
     * Prints a message with optional formatting.
     * @param message - The content to show
     */
    public print(message?: string): void {
        // Simple comment
        const version: number = 1;
        const text = message ?? "Default";
        
        console.log(`${this.name}: ${text} (v${version})`);
        
        const regex = /[a-z]+/g;
        regex.test(text);
    }
    
    /** @deprecated Use print instead */
    public oldPrint(): void {
        this.print();
    }
}

export enum Status {
    Active,
    Inactive
}

export type Point = {
    readonly x: number;
    y?: number;
};

interface Printable {
    print(message?: string): void;
}
