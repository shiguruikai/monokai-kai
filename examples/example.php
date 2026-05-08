<?php
/**
 * Doc comment: Example PHP file.
 * @author monokai-kai
 */

namespace Example;

use Base\BaseClass;

interface Printable {
    public function printMessage(string $message): void;
}

enum Status: string {
    case Active = 'active';
    case Inactive = 'inactive';
}

#[Attribute]
class Experimental {}

#[Experimental]
class Example extends BaseClass implements Printable {
    public const MAX_COUNT = 100;
    private static int $instances = 0;

    /**
     * Constructor property promotion (PHP 8.0+)
     */
    public function __construct(
        public readonly string $name,
        private string $secret = "hidden"
    ) {
        self::$instances++;
    }

    /**
     * @param string $message The message to show
     */
    public function printMessage(string $message): void {
        // Simple comment
        $version = 1;
        $status = Status::Active;
        
        echo "{$this->name}: {$message} (v{$version}, status: {$status->value})\n";
        
        $list = ['a', 'b', 'c'];
        array_map(fn($item) => strtoupper($item), $list);
    }

    public static function getInstances(): int {
        return self::$instances;
    }

    /** @deprecated Use printMessage instead */
    public function oldPrint(): void {
        $this->printMessage("Deprecated call");
    }
}

function global_func(int $param): int {
    return $param * 2;
}
