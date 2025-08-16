# app/api/routes.py
from fastapi import APIRouter
from ..models import Item

router = APIRouter()

# 仮データ
DB: list[Item] = []

@router.get("/items")
def list_items():
    return DB

@router.post("/items", status_code=201)
def create_item(item: Item):
    DB.append(item)
    return item
