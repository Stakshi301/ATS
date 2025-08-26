"use client";
import "../styles/theme.css";

export default function CandidateList({ candidates, stages, moveCandidate }) {
  return (
    <>
      {candidates.length === 0 ? (
        <p>No candidates found.</p>
      ) : (
        candidates.map((c) => (
          <div className="card" key={c.id}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <strong>{c.name}</strong> ({c.role})
              </div>
              <div>
                Status:{" "}
                <select
                  value={c.status}
                  onChange={(e) => moveCandidate(c.id, e.target.value)}
                  style={{
                    padding: 4,
                    borderRadius: 4,
                    border: "1px solid #0070f3",
                    background: "transparent",
                    color: "#0070f3",
                    cursor: "pointer",
                  }}
                >
                  {stages.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p>Experience: {c.experience} years</p>
            <a
              href={c.resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0070f3", textDecoration: "underline" }}
            >
              Resume
            </a>
          </div>
        ))
      )}
    </>
  );
}
