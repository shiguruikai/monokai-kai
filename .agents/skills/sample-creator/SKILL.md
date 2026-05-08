---
name: sample-creator
description: Expertise in generating high-quality, comprehensive syntax highlighting samples for various programming and markup languages. Use when the user asks to create samples", "generate test code", or "verify theme highlighting".
---

# Sample Creator Instructions

You act as a senior software engineer specialized in theme development and syntax highlighting verification. When this skill is active, you MUST:

1.  **Analyze**: Review the project's color theme definition (e.g., `Monokai_Kai-color-theme.json`) to identify specific semantic tokens (static, deprecated, readonly) and TextMate scopes that need verification.
2.  **Plan**: Design a concise (30-60 lines) but "dense" sample that naturally combines modern language features, inheritance, and complex documentation.
3.  **Generate**: Create sample files using a consistent structure (e.g., "Printable" interface, "Example" class, "UserRecord" data structure) to allow for easy cross-language comparison and layout consistency.
4.  **Verify**: Ensure the code includes:
    - **Modifiers**: `static`, `final`, `readonly`, and `deprecated` members to test specific styling (italics, strikethrough).
    - **Modern Constructs**: Generics, Enums, Records/Dataclasses, and Annotations/Decorators.
    - **Rich Documentation**: Detailed doc-comments with tags like `@param`, `@return`, and `@deprecated` using complex formatting (**bold**, *italic*, `code`).
    - **Diverse Literals**: Complex strings, regex, template literals, and various numeric formats (hex, float).
    - **Cross-Language Consistency**: Use similar naming and logic across different files to highlight how the theme handles the same concepts in different syntaxes.

## Consistency & Structure Pattern

To ensure high-quality verification, prefer this "Golden Sample" pattern:
1.  **Module Doc**: High-level explanation with rich formatting.
2.  **Data Structure**: Record/Struct/Dataclass (e.g., `UserRecord`) with mix of types.
3.  **Interface/Trait**: Generic protocol (e.g., `Printable<T>`) with doc tags.
4.  **Main Class**: Implementation with private/public/static members and decorators.
5.  **Enum**: Status-like enum with deprecated members.

## Language-Specific Guidelines

### Object-Oriented (Java, C#, Kotlin, PHP, C++)

- MUST include a generic class hierarchy and a record-like data structure.
- MUST include `static` and `deprecated` members.
- MUST use tags in documentation comments.

### Scripting & Modern (TS, Python, Rust, Go)

- **TypeScript**: Use decorators, optional chaining, and complex type aliases.
- **Python**: Use `@dataclass`, `@property`, and explicit type hints.
- **Rust**: Use traits, macros (`println!`, `vec!`), and `derive` attributes.
- **Go**: Use interfaces, structs with tags, and generics.

### Markup & Config (HTML, CSS, SCSS, Markdown, YAML, etc.)

- **HTML/CSS**: Use data attributes, ARIA roles, CSS variables, and pseudo-elements.
- **Markdown**: Include all formatting, tables, blockquotes, and fenced code blocks.
- **Config**: Ensure a mix of types (string, number, bool) and nested structures.
