"use client";
export default function CandidateFilter({
  filter,
  setFilter,
  candidates,
  stages,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        marginBottom: 32,
      }}
    >
      <input
        type="text"
        placeholder="Search by name or role..."
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        style={{ width: "100%", padding: 8 }}
      />

      <div style={{ display: "flex", gap: 16 }}>
        <select
          value={filter.role}
          onChange={(e) => setFilter({ ...filter, role: e.target.value })}
          style={{ flex: 1, padding: 8 }}
        >
          <option value="">All Roles</option>
          {Array.from(new Set(candidates.map((c) => c.role))).map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

        <select
          value={filter.status}
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          style={{ flex: 1, padding: 8 }}
        >
          <option value="">All Statuses</option>
          {stages.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <select
          value={filter.experience}
          onChange={(e) => setFilter({ ...filter, experience: e.target.value })}
          style={{ flex: 1, padding: 8 }}
        >
          <option value="">All Experiences</option>
          {Array.from(new Set(candidates.map((c) => c.experience))).map(
            (exp) => (
              <option key={exp} value={exp}>
                {exp} years
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
}
