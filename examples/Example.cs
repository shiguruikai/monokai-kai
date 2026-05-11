/*
 * http://example.com
 */
/**
 * Doc comment: Example C# file.
 */
using System;
using System.Collections.Generic;

namespace ExampleNamespace
{
    public class Base {}

    public interface IPrintable
    {
        void Print(string message);
    }

    [Obsolete("Use NewExample class instead")]
    public class OldExample {}

    /// <summary>
    /// Record for immutable data.
    /// </summary>
    public record UserRecord(string Username, int Id, bool IsActive);

    public class Example<T> : Base, IPrintable where T : class
    {
        public static readonly int MaxCount = 100;
        private static string _prefix = "CS";

        /// <summary>
        /// Property comment.
        /// </summary>
        public string Name { get; set; }

        public Example(string name)
        {
            Name = name; // Property
        }

        [Obsolete("Use Print(string message)")]
        public void OldPrint() => Print("Old");

        public void Print(string message)
        {
            // Simple comment
            var version = 1;
            Console.WriteLine($"{_prefix}_{Name}: {message} {version}");

            var list = new List<string> { message };
        }

        public static void StaticMethod()
        {
            Console.WriteLine("Static call");
        }
    }

    public enum AppStatus
    {
        Active,
        Inactive,
        [Obsolete]
        Pending
    }
}
