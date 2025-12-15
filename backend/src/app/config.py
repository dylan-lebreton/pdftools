from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    ENVIRONMENT: str = "local"
    FRONTEND_DIR: str = "frontend"

    class Config:
        env_file = ".env"


settings = Settings()
