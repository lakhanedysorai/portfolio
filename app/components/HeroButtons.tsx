"use client";

export function HeroButtons() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const downloadCv = () => {
    const a = document.createElement("a");
    a.href = "/LakhanSharmaResume.pdf";
    a.download = "LakhanSharmaResume.pdf";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="hero-buttons">
      <button type="button" className="btn btn-primary" onClick={scrollToProjects}>
        View My Work
      </button>
      <button type="button" className="btn btn-secondary" onClick={downloadCv}>
        Download CV
      </button>
    </div>
  );
}
