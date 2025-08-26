"use client";
export default function CandidateForm({ form, setForm, handleAdd }) {
  return (
    <form
      onSubmit={handleAdd}
      style={{
        borderTop: "1px solid #ccc",
        paddingTop: 16,
        marginTop: 32,
      }}
    >
      <h3>Add New Candidate</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ width: "100%", padding: 8 }}
        />
        <input
          type="text"
          placeholder="Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          style={{ width: "100%", padding: 8 }}
        />
        <input
          type="number"
          placeholder="Experience (years)"
          value={form.experience}
          onChange={(e) => setForm({ ...form, experience: e.target.value })}
          style={{ width: "100%", padding: 8 }}
        />
        <input
          type="text"
          placeholder="Resume Link"
          value={form.resume}
          onChange={(e) => setForm({ ...form, resume: e.target.value })}
          style={{ width: "100%", padding: 8 }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#0070f3",
            color: "white",
            padding: "12px 16px",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          Add Candidate
        </button>
      </div>
    </form>
  );
}
