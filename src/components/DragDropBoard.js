"use client";
import { useState } from "react";
import CandidateList from "./CandidateList";
import CandidateForm from "./CandidateForm";
import CandidateFilter from "./CandidateFilter";
import ThemeToggle from "./ThemeToggle";

// data
const initialCandidates = [
  {
    id: "1",
    name: "John Doe",
    role: "Frontend Developer",
    experience: 3,
    resume: "https://LINKRESUME",
    status: "Applied",
  },
  {
    id: "2",
    name: "Jane ",
    role: "Backend Developer",
    experience: 5,
    resume: "https://LINKRESUME",
    status: "Interview",
  },
  {
    id: "3",
    name: "Alice ",
    role: "UI Designer",
    experience: 2,
    resume: "https://LINKRESUME",
    status: "Rejected",
  },
  {
    id: "4",
    name: "Brown",
    role: "DevOps Engineer",
    experience: 4,
    resume: "https://LINKRESUME",
    status: "Offer",
  },
  {
    id: "5",
    name: "Allen ",
    role: "Graphic Designer",
    experience: 5,
    resume: "https://LINKRESUME",
    status: "Applied",
  },
  {
    id: "6",
    name: "Brown",
    role: "Testing Engineer",
    experience: 4,
    resume: "https://LINKRESUME",
    status: "Offer",
  },
];

const stages = ["Applied", "Interview", "Offer", "Rejected"];

export default function CandidateTracker() {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [form, setForm] = useState({
    name: "",
    role: "",
    experience: "",
    resume: "",
    status: "Applied",
  });
  const [filter, setFilter] = useState({
    role: "",
    status: "",
    experience: "",
    search: "",
  });

  // Add new application
  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.experience || !form.resume) return;
    setCandidates([
      ...candidates,
      {
        ...form,
        id: Date.now().toString(),
        experience: Number(form.experience),
      },
    ]);
    setForm({
      name: "",
      role: "",
      experience: "",
      resume: "",
      status: "Applied",
    });
  };

  // Move stage of appli 
  const moveCandidate = (id, newStatus) => {
    setCandidates(
      candidates.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );
  };

  // Filter candidates 
  const filteredCandidates = candidates.filter((c) => {
    return (
      (c.name.toLowerCase().includes(filter.search.toLowerCase()) ||
        c.role.toLowerCase().includes(filter.search.toLowerCase())) &&
      (!filter.status || c.status === filter.status) &&
      (!filter.role || c.role === filter.role) &&
      (!filter.experience || c.experience === Number(filter.experience))
    );
  });

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <ThemeToggle />
      <h2>Candidate Application Tracker</h2>
      <CandidateFilter
        filter={filter}
        setFilter={setFilter}
        candidates={candidates}
        stages={stages}
      />
      <CandidateList
        candidates={filteredCandidates}
        stages={stages}
        moveCandidate={moveCandidate}
      />
      <CandidateForm form={form} setForm={setForm} handleAdd={handleAdd} />
    </div>
  );
}
