"use client";
import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");

  const handleUpload = async () => {
    if (!file) {
      setStatus("Please select a file.");
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/zip",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setStatus("Only PDF, ZIP, or DOCX files are allowed.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setStatus("Uploading...");

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      setStatus(data.message);
    } else {
      setStatus("Upload failed: " + data.message);
    }
  };

  return (
    <div className="space-y-6">
      <input
        type="file"
        accept=".pdf,.zip,.docx"
        required
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full text-sm text-gray-900 border-l-4 border-l-lime-400 rounded-lg cursor-pointer bg-lime-500"
      />
      <button
        type="button"
        onClick={handleUpload}
        className="bg-lime-400 text-slate-900 font-bold px-4 py-2 rounded hover:bg-lime-500"
      >
        Upload
      </button>
      {status && <p className="text-sm text-gray-700">{status}</p>}
    </div>
  );
}
