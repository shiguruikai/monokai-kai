# Monokai Kai Theme

This is a **comprehensive** Markdown example designed to test the **Monokai Kai** color theme.

## Text Formatting
- **Bold text** with `inline code`
- *Italic text* and ***Bold & Italic***
- ~~Strikethrough text~~
- [Link to GitHub](https://github.com/monokai-kai)
- ![Placeholder](https://via.placeholder.com/50)

## Code Blocks

### TypeScript
```typescript
/**
 * *Detailed* documentation.
 * @module Example
 */
export class Example<T> {
    public static readonly VERSION = "1.2.0";
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    /** @deprecated */
    public oldMethod(): void {
        console.log("Deprecated");
    }
}
```

### Rust
```rust
#[derive(Debug)]
pub enum Status {
    Active,
    #[deprecated]
    Pending,
}
```

## Lists & Task Lists
1. Ordered Item
2. Ordered Item
   - Nested Unordered
   - [x] Task Done
   - [ ] Task Pending

## Tables
| Feature | Status | Priority |
| :--- | :---: | ---: |
| Semantic Highlighting | **Active** | High |
| Syntax Coloring | *Complete* | Medium |
| Readability | Excellent | `Max` |

## Blockquotes
> "The only way to do great work is to love what you do."
> — *Steve Jobs*
>> Nested blockquote for depth testing.

## Extended Syntax
- Footnote[^1]
- <span style="color: #ff6188;">HTML Span Tag</span>
- <kbd>Ctrl</kbd> + <kbd>C</kbd>

---
[^1]: This is a footnote for testing.
*Created for Monokai Kai theme testing.*
