from __future__ import annotations

from typing import Annotated

from fastapi import Header, HTTPException, status

from .constants import VISIT_ID_HEADER


async def get_visit_id(
        visit_id: Annotated[str | None, Header(alias=VISIT_ID_HEADER)] = None,
) -> str:
    if not visit_id:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Missing required header: {VISIT_ID_HEADER}",
        )
    return visit_id
