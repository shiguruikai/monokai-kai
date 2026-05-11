/*
 * http://example.com
 */

/**
 * *Detailed* documentation for the `Example` class.
 * This sample demonstrates **Monokai Kai** theme features.
 *
 * @author monokai-kai
 * @version 1.2.0
 * @see http://example.com
 */
package example;

/**
 * Interface for objects that can be printed.
 * @param <T> The type of the content to print.
 */
interface Printable<T> {
    /**
     * Prints the content.
     * @param content The **content** to print.
     */
    void print(T content);
}

/**
 * Data record representing a user information.
 * @since 1.0.0
 */
record UserRecord(int id, String username, boolean active) {}

/**
 * Main example class demonstrating various Java features.
 * @param <T> A generic type parameter.
 */
public class Example<T> implements Printable<String> {
    /** Static version identifier. */
    public static final String VERSION = "1.2.0";

    private String name;
    public AppStatus status = AppStatus.ACTIVE;

    public Example(String name) {
        this.name = name;
    }

    /**
     * Prints a formatted message.
     * @param message The message to *display*.
     * @deprecated Use standard logging instead.
     */
    @Override
    @Deprecated
    public void print(String message) {
        // Simple line comment
        /* Block comment */
        double version = 1.0;
        String template = String.format("%s: %s (v%f)", this.name, message, version);

        System.out.println(template);
    }

    /**
     * Static helper method.
     */
    public static void logStatic() {
        System.out.println("Static call from " + VERSION);
    }
}

/**
 * Application status enumeration.
 */
enum AppStatus {
    ACTIVE,
    INACTIVE,
    /** @deprecated */
    @Deprecated
    PENDING
}
