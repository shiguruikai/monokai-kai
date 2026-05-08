"""
Doc comment: Example Python file.
"""
from typing import List, Optional
from dataclasses import dataclass

@dataclass(frozen=True)
class UserRecord:
    username: str
    id: int
    active: bool = True

MAX_COUNT: int = 100

class Example(Base):
    """
    Example class with various Python features.
    """
    
    _prefix: str = "PY"

    def __init__(self, name: str):
        # Property
        self.name = name
        self._items: List[str] = []

    @property
    def full_name(self) -> str:
        return f"{self._prefix}_{self.name}"

    @staticmethod
    def get_version() -> int:
        return 1

    def print_message(self, message: Optional[str] = None) -> None:
        # Simple comment
        version = self.get_version()
        text = message or "Default"
        print(f"{self.full_name}: {text} {version}")
        
        if len(self._items) > 0:
            print(list(map(str.upper, self._items)))

def global_func(param1: int) -> int:
    return param1 * 2
