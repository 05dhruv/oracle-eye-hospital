"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import DataTable from "../components/DataTable";

export default function VideoGalleryPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("list"); // 'list' | 'form'
  const [form, setForm] = useState({ id: null, title: "", url: "", active: true, sortOrder: 0 });
  const [error, setError] = useState("");

  const fetchVideos = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/videos");
    if (res.ok) {
      setVideos(await res.json());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleEdit = (video) => {
    setForm(video);
    setError("");
    setView("form");
  };

  const handleDelete = async (video) => {
    const res = await fetch(`/api/admin/videos/${video.id}`, { method: "DELETE" });
    if (res.ok) {
      fetchVideos();
    } else {
      alert("Failed to delete video");
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    const isEditing = !!form.id;
    const url = isEditing ? `/api/admin/videos/${form.id}` : "/api/admin/videos";
    const method = isEditing ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setView("list");
      fetchVideos();
    } else {
      setError((await res.json().catch(() => ({}))).error || "Failed to save video");
    }
  };

  const columns = [
    { key: "index", label: "Sr. No.", sortable: false, render: (_, idx) => idx + 1 },
    { key: "title", label: "Title" },
    { key: "url", label: "YouTube URL", render: (row) => <a href={row.url} target="_blank" className="ad-link" style={{ color: "#4e7cff" }}>View Link</a> },
    { key: "status", label: "Status" }
  ];

  return (
    <div>
      <div className="ad-header-card">
        <h2 className="ad-header-title">{view === "list" ? "Manage Video Gallery" : form.id ? "Edit Video" : "Add New Video"}</h2>
        {view === "list" && (
          <button className="ad-btn-primary" onClick={() => { setForm({ id: null, title: "", url: "", active: true, sortOrder: 0 }); setView("form"); }}>
            <Plus size={18} /> Add New Video
          </button>
        )}
      </div>

      <div className="ad-card">
        {error && <div className="ad-error">{error}</div>}

        {view === "list" ? (
          loading ? (
            <div className="ad-empty">Loading videos...</div>
          ) : (
            <DataTable 
              columns={columns} 
              data={videos.map((v, i) => ({ ...v, index: i + 1 }))} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
            />
          )
        ) : (
          <form onSubmit={handleSave} className="ad-form">
            <div className="ad-form-group">
              <label className="ad-label">Video Title *</label>
              <input 
                type="text" 
                className="ad-input" 
                value={form.title} 
                onChange={(e) => setForm({ ...form, title: e.target.value })} 
                required 
                placeholder="e.g., Eye Checkup Campaign"
              />
            </div>
            
            <div className="ad-form-group">
              <label className="ad-label">YouTube URL *</label>
              <input 
                type="url" 
                className="ad-input" 
                value={form.url} 
                onChange={(e) => setForm({ ...form, url: e.target.value })} 
                required 
                placeholder="https://www.youtube.com/watch?v=..."
              />
            </div>
            
            <div className="ad-form-group">
              <label className="ad-label">Sort Order</label>
              <input 
                type="number" 
                className="ad-input" 
                value={form.sortOrder} 
                onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) })} 
              />
            </div>
            
            <div className="ad-form-group">
              <label className="ad-label">Status (Active/Inactive)</label>
              <label className="ad-toggle">
                <input 
                  type="checkbox" 
                  checked={form.active} 
                  onChange={(e) => setForm({ ...form, active: e.target.checked })} 
                />
                <span className="ad-slider"></span>
              </label>
            </div>

            <div className="ad-form-actions">
              <button type="submit" className="ad-btn-primary" style={{ border: 'none', fontSize: '0.875rem' }}>Save Video</button>
              <button type="button" className="ad-btn-cancel" onClick={() => setView("list")}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
