"use client";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, Trash2, X, ChevronUp, ChevronDown, Mail, Phone, Calendar, User, MessageSquare } from "lucide-react";
import ConfirmModal from "../components/ConfirmModal";
import { toast } from "../components/Toast";
import "../admin.css";
import "../components/datatable.css";

function formatDate(isoStr) {
  if (!isoStr) return "—";
  try {
    const d = new Date(isoStr);
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return isoStr;
  }
}

function truncate(text, max = 50) {
  if (!text) return "—";
  if (text.length <= max) return text;
  return text.slice(0, max) + "…";
}

export default function EnquiriesClient({ initialRows }) {
  const router = useRouter();
  const [rows, setRows] = useState(initialRows || []);
  const [filter, setFilter] = useState("ALL"); // ALL, UNREAD, READ
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState("createdAt");
  const [sortAsc, setSortAsc] = useState(false);

  // View modal state
  const [viewTarget, setViewTarget] = useState(null);

  // Delete modal state
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setRows(initialRows || []);
  }, [initialRows]);

  useEffect(() => {
    setPage(1);
  }, [search, filter, entries]);

  // ── Open View Modal & Mark as Read ──────────────────────────────
  async function handleView(row) {
    setViewTarget(row);

    // If it was unread, mark as read immediately via PUT
    if (!row.isRead) {
      // Optimistic update
      setRows((prev) => prev.map((r) => (r.id === row.id ? { ...r, isRead: true } : r)));
      setViewTarget({ ...row, isRead: true });

      try {
        const res = await fetch(`/api/admin/enquiries/${row.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isRead: true }),
        });
        if (!res.ok) {
          throw new Error("Failed to mark message as read");
        }
        router.refresh();
      } catch (err) {
        console.error("Error marking enquiry as read:", err);
      }
    }
  }

  // ── Delete Enquiry ────────────────────────────────────────────────
  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);

    try {
      const res = await fetch(`/api/admin/enquiries/${deleteTarget.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete message");
      }

      setRows((prev) => prev.filter((r) => r.id !== deleteTarget.id));
      toast("Message deleted successfully", "success");
      setDeleteTarget(null);
      router.refresh();
    } catch (err) {
      toast(err.message || "Failed to delete message", "error");
    } finally {
      setDeleting(false);
    }
  }

  // ── Filter & Search ───────────────────────────────────────────────
  const filtered = useMemo(() => {
    return rows.filter((row) => {
      // Read / Unread filter
      if (filter === "UNREAD" && row.isRead) return false;
      if (filter === "READ" && !row.isRead) return false;

      // Search query
      if (search.trim()) {
        const q = search.toLowerCase();
        const matches =
          (row.name && row.name.toLowerCase().includes(q)) ||
          (row.email && row.email.toLowerCase().includes(q)) ||
          (row.phone && row.phone.toLowerCase().includes(q)) ||
          (row.subject && row.subject.toLowerCase().includes(q)) ||
          (row.message && row.message.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    });
  }, [rows, filter, search]);

  // ── Sort ──────────────────────────────────────────────────────────
  const sorted = useMemo(() => {
    if (!sortKey) return filtered;
    return [...filtered].sort((a, b) => {
      const av = a[sortKey] ?? "";
      const bv = b[sortKey] ?? "";
      if (av < bv) return sortAsc ? -1 : 1;
      if (av > bv) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [filtered, sortKey, sortAsc]);

  function handleSort(key) {
    if (sortKey === key) setSortAsc((prev) => !prev);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  }

  // ── Pagination ────────────────────────────────────────────────────
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / entries));
  const safePage = Math.min(page, totalPages);
  const sliced = sorted.slice((safePage - 1) * entries, safePage * entries);
  const from = total === 0 ? 0 : (safePage - 1) * entries + 1;
  const to = Math.min(safePage * entries, total);

  const pageNums = useMemo(() => {
    const pages = [];
    const start = Math.max(1, safePage - 2);
    const end = Math.min(totalPages, start + 4);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }, [safePage, totalPages]);

  const unreadCount = useMemo(() => rows.filter((r) => !r.isRead).length, [rows]);

  return (
    <>
      {/* ── Top Header Card ── */}
      <div className="adt-header-card">
        <div>
          <h2 className="adt-header-title">Contact Messages (Enquiries)</h2>
          {unreadCount > 0 && (
            <span style={{ fontSize: "12px", color: "#b45309", fontWeight: 500 }}>
              {unreadCount} unread {unreadCount === 1 ? "message" : "messages"}
            </span>
          )}
        </div>
        <div>
          {/* Read / Unread Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              padding: "7px 12px",
              borderRadius: "4px",
              border: "1px solid #d1d5db",
              fontSize: "13px",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            <option value="ALL">All Messages ({rows.length})</option>
            <option value="UNREAD">Unread Only ({unreadCount})</option>
            <option value="READ">Read Only ({rows.length - unreadCount})</option>
          </select>
        </div>
      </div>

      {/* ── Table Card ── */}
      <div className="adt-content-card">
        {/* Controls */}
        <div className="adt-controls">
          <div className="adt-entries">
            <label>
              Show{" "}
              <select value={entries} onChange={(e) => setEntries(Number(e.target.value))}>
                {[10, 25, 50, 100].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>{" "}
              entries
            </label>
          </div>
          <div className="adt-search">
            <label>
              Search:{" "}
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, phone, message..."
                className="adt-search-input"
              />
            </label>
          </div>
        </div>

        {/* Table */}
        <div className="adt-table-wrap">
          <table className="adt-table">
            <thead>
              <tr>
                <th className="adt-th adt-th-sr">Sr. No.</th>
                <th className="adt-th adt-sortable" onClick={() => handleSort("name")}>
                  <span className="adt-th-inner">
                    Name
                    <span className="adt-sort-icons">
                      <ChevronUp size={11} className={sortKey === "name" && sortAsc ? "adt-sort-active" : ""} />
                      <ChevronDown size={11} className={sortKey === "name" && !sortAsc ? "adt-sort-active" : ""} />
                    </span>
                  </span>
                </th>
                <th className="adt-th">Phone</th>
                <th className="adt-th">Email</th>
                <th className="adt-th">Subject</th>
                <th className="adt-th">Message</th>
                <th className="adt-th adt-sortable" onClick={() => handleSort("createdAt")}>
                  <span className="adt-th-inner">
                    Date
                    <span className="adt-sort-icons">
                      <ChevronUp size={11} className={sortKey === "createdAt" && sortAsc ? "adt-sort-active" : ""} />
                      <ChevronDown size={11} className={sortKey === "createdAt" && !sortAsc ? "adt-sort-active" : ""} />
                    </span>
                  </span>
                </th>
                <th className="adt-th">Status</th>
                <th className="adt-th">Action</th>
              </tr>
            </thead>
            <tbody>
              {sliced.length === 0 ? (
                <tr>
                  <td className="adt-empty" colSpan={9}>
                    No messages found
                  </td>
                </tr>
              ) : (
                sliced.map((row, idx) => (
                  <tr
                    key={row.id}
                    className={`adt-tr ${!row.isRead ? "adt-tr-unread" : ""}`}
                  >
                    <td className="adt-td adt-td-sr">{from + idx}</td>
                    <td className="adt-td">
                      <strong>{row.name}</strong>
                    </td>
                    <td className="adt-td">
                      {row.phone ? (
                        <a href={`tel:${row.phone}`} style={{ color: "#2563eb", textDecoration: "none" }}>
                          {row.phone}
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="adt-td">
                      {row.email ? (
                        <a href={`mailto:${row.email}`} style={{ color: "#2563eb", textDecoration: "none" }}>
                          {row.email}
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="adt-td">{row.subject || "—"}</td>
                    <td className="adt-td" title={row.message} style={{ maxWidth: "220px" }}>
                      {truncate(row.message, 55)}
                    </td>
                    <td className="adt-td" style={{ whiteSpace: "nowrap" }}>
                      {formatDate(row.createdAt)}
                    </td>
                    <td className="adt-td">
                      <span className={`adt-badge ${row.isRead ? "adt-badge-active" : "adt-badge-pending"}`}>
                        {row.isRead ? "Read" : "Unread"}
                      </span>
                    </td>
                    <td className="adt-td adt-actions">
                      <button className="adt-btn-view" onClick={() => handleView(row)} title="View message">
                        <Eye size={13} /> View
                      </button>
                      <button className="adt-btn-delete" onClick={() => setDeleteTarget(row)} title="Delete message">
                        <Trash2 size={13} /> Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Bottom Pagination */}
        <div className="adt-bottom">
          <div className="adt-info">
            Showing {from} to {to} of {total} entries
          </div>
          <div className="adt-pagination">
            <button
              className="adt-page-btn"
              disabled={safePage === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              Previous
            </button>
            {pageNums.map((n) => (
              <button
                key={n}
                className={`adt-page-btn ${n === safePage ? "adt-page-active" : ""}`}
                onClick={() => setPage(n)}
              >
                {n}
              </button>
            ))}
            <button
              className="adt-page-btn"
              disabled={safePage === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* ── View Detail Modal ── */}
      {viewTarget && (
        <div className="adt-modal-overlay" onClick={() => setViewTarget(null)}>
          <div className="adt-form-modal adt-form-modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="adt-form-modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <h3 style={{ margin: 0, fontSize: 18, color: "#111827" }}>Message from {viewTarget.name}</h3>
                <span className={`adt-badge ${viewTarget.isRead ? "adt-badge-active" : "adt-badge-pending"}`}>
                  {viewTarget.isRead ? "Read" : "Unread"}
                </span>
              </div>
              <button
                className="adt-form-modal-close"
                onClick={() => setViewTarget(null)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280" }}
              >
                <X size={20} />
              </button>
            </div>

            <div className="adt-detail-grid">
              <div className="adt-detail-item">
                <span className="adt-detail-label">Sender Name</span>
                <span className="adt-detail-val" style={{ fontWeight: 600 }}>{viewTarget.name}</span>
              </div>
              <div className="adt-detail-item">
                <span className="adt-detail-label">Phone</span>
                <span className="adt-detail-val">
                  {viewTarget.phone ? (
                    <a href={`tel:${viewTarget.phone}`} style={{ color: "#2563eb", textDecoration: "none" }}>
                      {viewTarget.phone}
                    </a>
                  ) : (
                    "—"
                  )}
                </span>
              </div>
              <div className="adt-detail-item">
                <span className="adt-detail-label">Email</span>
                <span className="adt-detail-val">
                  {viewTarget.email ? (
                    <a href={`mailto:${viewTarget.email}`} style={{ color: "#2563eb", textDecoration: "none" }}>
                      {viewTarget.email}
                    </a>
                  ) : (
                    "—"
                  )}
                </span>
              </div>
              <div className="adt-detail-item">
                <span className="adt-detail-label">Date & Time</span>
                <span className="adt-detail-val">{formatDate(viewTarget.createdAt)}</span>
              </div>
              <div className="adt-detail-item adt-detail-full">
                <span className="adt-detail-label">Subject</span>
                <span className="adt-detail-val" style={{ fontWeight: 500 }}>{viewTarget.subject || "No Subject"}</span>
              </div>
              <div className="adt-detail-item adt-detail-full">
                <span className="adt-detail-label">Full Message</span>
                <div className="adt-detail-msg-box">
                  {viewTarget.message}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: 20 }}>
              <button
                type="button"
                className="adt-btn-cancel-form"
                onClick={() => setViewTarget(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Confirm Delete Modal ── */}
      {deleteTarget && (
        <ConfirmModal
          message={`Delete contact message from "${deleteTarget.name}"? This action cannot be undone.`}
          onConfirm={handleDelete}
          onCancel={() => !deleting && setDeleteTarget(null)}
        />
      )}
    </>
  );
}
