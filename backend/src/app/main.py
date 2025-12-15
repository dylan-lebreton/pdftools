from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from .config import settings


# from .health.router import router as health_router


def create_app() -> FastAPI:
    app = FastAPI(title="pdftools")

    # ---------- API ----------
    # app.include_router(health_router, prefix="/api", tags=["health"])

    # ---------- Frontend statique ----------
    app.mount(
        "/",
        StaticFiles(directory=Path(__file__).parents[3] / settings.FRONTEND_DIR, html=True),
        name="frontend",
    )

    return app


app = create_app()
