//! *Detailed* documentation for the `example` crate.
//! This sample demonstrates **Monokai Kai** theme features.

/// Data structure representing a user record.
/// 
/// # Fields
/// * `id` - Unique identifier.
/// * `username` - Display name.
#[derive(Debug, Clone)]
pub struct UserRecord {
    pub id: u32,
    pub username: String,
    pub active: bool,
}

/// Interface for objects that can be printed.
/// @template T The type of the content to print.
pub trait Printable<T> {
    /// Prints the content.
    /// 
    /// # Arguments
    /// * `content` - The **content** to print.
    fn print(&self, content: T);
}

/// Main example struct demonstrating various Rust features.
/// @template T A generic type parameter.
pub struct Example<T> {
    name: String,
    pub status: AppStatus,
    _data: T,
}

impl<T> Example<T> {
    /// Static version identifier.
    pub const VERSION: &'static str = "1.2.0";

    pub fn new(name: &str, data: T) -> Self {
        Self {
            name: name.to_string(),
            status: AppStatus::Active,
            _data: data,
        }
    }

    /// Static helper method.
    pub fn log_static() {
        println!("Static call from {}", Self::VERSION);
    }
}

impl<T> Printable<&str> for Example<T> {
    /// Prints a formatted message.
    /// 
    /// # Arguments
    /// * `message` - The message to *display*.
    #[deprecated(note = "use logging instead")]
    fn print(&self, message: &str) {
        // Simple line comment
        /* Block comment */
        let version = 1.0;
        let template = format!("{}: {} (v{})", self.name, message, version);
        
        println!("{}", template);
    }
}

/// Application status enumeration.
#[derive(Debug, PartialEq)]
pub enum AppStatus {
    Active,
    Inactive,
    #[deprecated]
    Pending,
}

fn main() {
    let example = Example::new("Rust", 42);
    #[allow(deprecated)]
    example.print("Hello world");
}
