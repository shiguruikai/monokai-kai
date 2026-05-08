/**
 * Doc comment: Example Java class.
 * @author monokai-kai
 * @version 1.0
 */
package example;

import java.util.List;
import java.util.ArrayList;

@SuppressWarnings("unused")
public class Example<T extends Base> extends Base implements Printable {
    
    /**
     * Data record for holding user information.
     */
    public record UserRecord(String username, int id, boolean active) {}

    /**
     * A static constant property.
     */
    public static final int MAX_COUNT = 100;
    
    private static String prefix = "LOG:";
    
    @Deprecated
    public String oldField;

    private String name;

    public Example(String name) {
        this.name = name; // Property
    }

    /**
     * @param message The message to print
     * @return The length of the message
     */
    @Override
    public void print(String message) {
        // Simple comment
        int version = 1;
        System.out.println(prefix + " " + message + " " + version);
        
        List<String> list = new ArrayList<>();
        list.add(message);
    }
    
    public static void staticMethod() {
        System.out.println("Static call");
    }
    
    @Deprecated
    public void deprecatedMethod() {
        // This should have strikethrough
    }
}

enum Status {
    ACTIVE,
    INACTIVE,
    @Deprecated
    PENDING
}

interface Printable {
    void print(String message);
}
