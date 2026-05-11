/*
 * http://example.com
 */
/**
 * Doc comment: Example C++ file.
 * See: http://example.com
 */
#include <iostream>
#include <string>
#include <vector>
#include <memory>

namespace example {

template <typename T>
class Printable {
public:
    virtual void print(T message) = 0;
};

class [[deprecated("Use NewExample")]] OldExample {};

class Example : public Printable<std::string> {
public:
    static constexpr int MAX_COUNT = 100;
    static int instances;

    Example(std::string name) : name_(name) {
        instances++;
    }

    void print(std::string message) override {
        // Simple comment
        int version = 1;
        std::cout << name_ << ": " << message << " " << version << std::endl;

        auto ptr = std::make_unique<int>(42);
        std::vector<int> v = {1, 2, 3};
    }

    static void staticFunc() {
        std::cout << "Static" << std::endl;
    }

private:
    std::string name_; // Property
};

int Example::instances = 0;

} // namespace example

int main() {
    example::Example ex("CPP");
    ex.print("Hello");
    example::Example::staticFunc();
    return 0;
}
