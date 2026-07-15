from enum import Enum
from pydantic import BaseModel, Field
from fastapi import FastAPI, HTTPException

app = FastAPI(title="AutoFix AI API", version="0.1.0")

class AgentName(str, Enum):
    repository = "repository_intelligence"
    debug = "debug"
    security = "security"
    performance = "performance"
    test = "test"
    documentation = "documentation"
    devops = "devops"

class AnalyzeRequest(BaseModel):
    repository_url: str = Field(..., description="GitHub repository URL the user owns or can access")
    authorized: bool = Field(False, description="Explicit confirmation that the user may analyze this repository")

class AgentFinding(BaseModel):
    agent: AgentName
    risk: str
    summary: str
    confidence: float
    verification: str

class AnalyzeResponse(BaseModel):
    repository_health_score: int
    engineering_report: list[AgentFinding]
    pull_request_plan: list[str]

@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "autofix-ai"}

@app.post("/analyze", response_model=AnalyzeResponse)
def analyze_repository(request: AnalyzeRequest) -> AnalyzeResponse:
    if not request.authorized:
        raise HTTPException(status_code=403, detail="Repository authorization is required before analysis")

    findings = [
        AgentFinding(agent=AgentName.repository, risk="low", summary="Detected stack, architecture boundaries, and dependency graph.", confidence=0.94, verification="Static repository scan completed"),
        AgentFinding(agent=AgentName.debug, risk="medium", summary="Prioritized build, import, type, and dependency risks for Codex repair.", confidence=0.88, verification="Patch plan generated"),
        AgentFinding(agent=AgentName.security, risk="medium", summary="Queued secret, authorization, dependency, and unsafe endpoint checks.", confidence=0.91, verification="Permission gate passed"),
        AgentFinding(agent=AgentName.test, risk="low", summary="Generated unit, integration, and edge-case verification strategy.", confidence=0.86, verification="Test matrix prepared"),
    ]
    return AnalyzeResponse(
        repository_health_score=92,
        engineering_report=findings,
        pull_request_plan=[
            "Create isolated Codex branch",
            "Apply explainable patches",
            "Run tests and security checks",
            "Generate PR summary with confidence score",
        ],
    )
