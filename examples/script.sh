#!/bin/bash
# Simple comment

# Variable assignment
MAX_COUNT=100
LOG_FILE="/var/log/example.log"

# Function declaration
print_message() {
    local message="${1:-Default}" # Parameter with default
    local version=1
    
    # Pipe and redirection
    echo "LOG: $message (v$version)" | tee -a "$LOG_FILE" > /dev/null
}

# Control flow
if [[ $# -gt 0 ]]; then
    case "$1" in
        start)
            print_message "Starting process..."
            ;;
        stop)
            print_message "Stopping process..."
            ;;
        *)
            echo "Usage: $0 {start|stop}"
            exit 1
            ;;
    esac
else
    # Subshell and variable interpolation
    CURRENT_USER=$(whoami)
    print_message "Hello, ${CURRENT_USER}!"
fi
