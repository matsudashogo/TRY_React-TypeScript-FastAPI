from pydantic import BaseModel, Field

class Item(BaseModel):
    id: int = Field(..., ge=1)
    name: str
    price: float = Field(..., ge=0)