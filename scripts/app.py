from pathlib import Path

import uvicorn

HOST = "127.0.0.1"
PORT = 8000

if __name__ == "__main__":
    backend_src = Path(__file__).resolve().parents[1] / "backend" / "src"

    uvicorn.run(
        "app.main:app",
        host=HOST,
        port=PORT,
        reload=True,
        app_dir=str(backend_src),
    )
