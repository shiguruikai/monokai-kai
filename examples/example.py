"""
*Detailed* documentation for the `example` module.
This sample demonstrates **Monokai Kai** theme features.

:see: http://example.com
"""

from dataclasses import dataclass
from typing import TypeVar, Generic, Optional, Protocol
from enum import IntEnum
import warnings

T = TypeVar("T")


@dataclass(frozen=True)
class UserRecord:
    """
    Data structure representing a user record.
    :since: 1.0.0
    """

    id: int
    username: str
    active: bool = True


class Printable(Protocol[T]):
    """
    Interface for objects that can be printed.
    :template T: The type of the content to print.
    """

    def print_content(self, content: T) -> None:
        """
        Prints the content.
        :param content: The **content** to print.
        """
        ...


class Example(Generic[T]):
    """
    Main example class demonstrating various Python features.
    """

    # Static version identifier
    VERSION: str = "1.2.0"

    def __init__(self, name: str):
        self._name = name
        self.status = AppStatus.ACTIVE

    @property
    def name(self) -> str:
        """The name property."""
        return self._name

    def print_message(self, message: str, count: int = 1) -> int:
        """
        Prints a formatted message.

        :param message: The message to *display*.
        :param count: Optional repetition count.
        :return: The length of the printed message.
        :deprecated: Use `logging.info()` instead.
        """
        # Simple line comment
        version: float = 1.0
        template: str = f"{self._name}: {message} (v{version})"

        print(template)
        return len(template)

    @staticmethod
    def log_static() -> None:
        """Static helper method."""
        print(f"Static call from {Example.VERSION}")


class AppStatus(IntEnum):
    """Application status enumeration."""

    ACTIVE = 0
    INACTIVE = 1
    PENDING = 2  # @deprecated
