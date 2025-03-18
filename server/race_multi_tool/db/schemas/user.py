from dataclasses import dataclass

@dataclass
class User:
    """Class for keeping track of a user's data structure"""
    id: int
    first_name: str
    last_name: str
