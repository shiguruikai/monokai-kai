/**
 * Doc comment: Example Kotlin file.
 * @property name The name of the example
 */
package example

import java.util.ArrayList

@Target(AnnotationTarget.CLASS)
annotation class Experimental

open class Base

@Experimental
class Example<T : Base>(val name: String, val data: T) : Base(), Printable {
    
    /**
     * Data class for immutable storage.
     */
    data class User(val id: Int, val username: String)

    companion object {
        const val MAX_COUNT = 100
        
        @JvmStatic
        fun createDefault(): Example<Base> {
            return Example("Default", Base())
        }
    }

    private var status: Status = Status.ACTIVE

    @Deprecated("Use newPrint instead", ReplaceWith("newPrint(message)"))
    override fun print(message: String) {
        println("${Companion.MAX_COUNT}: $message")
    }

    fun newPrint(message: String?) {
        // Simple comment
        val version = 1
        val text = message ?: "Empty"
        println("$name: $text $version")
        
        val list = ArrayList<String>()
        list.add(text)
    }
}

enum class Status {
    ACTIVE,
    INACTIVE,
    @Deprecated("Pending is no longer used")
    PENDING
}

interface Printable {
    fun print(message: String)
}
