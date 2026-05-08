/// Doc comment: Example Rust file.
/// 
/// # Arguments
/// * `x` - A description of the argument
#[derive(Debug)]
pub enum Status {
    Active,
    Inactive,
}

pub const MAX_COUNT: i32 = 100;

trait Printable {
    fn print(&self, message: &str);
}

pub struct Example<T> {
    pub name: String,
    pub data: T,
}

impl<T> Example<T> {
    pub fn new(name: &str, data: T) -> Self {
        Self {
            name: name.to_string(),
            data,
        }
    }

    pub fn static_func() -> &'static str {
        "Static"
    }
}

impl<T> Printable for Example<T> {
    fn print(&self, message: &str) {
        // Simple comment
        let version = 1;
        println!("{}: {} (v{})", self.name, message, version);
        
        let vec = vec![1, 2, 3];
        for i in vec.iter() {
            println!("{}", i);
        }
    }
}

#[deprecated(note = "use new_func")]
fn old_func() {}

fn main() {
    let ex = Example::new("Rust", 42);
    ex.print("Hello");
}
