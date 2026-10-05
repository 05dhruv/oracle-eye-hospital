"use client";
import { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, Edit, Trash2 } from "lucide-react";

export default function DataTable({ 
  columns, 
  data, 
  onEdit, 
  onDelete, 
  customStatusBadge,
  actionsCustom
}) {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);
  const [sortCol, setSortCol] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  // Filter
  const filtered = useMemo(() => {
    if (!search) return data;
    const lower = search.toLowerCase();
    return data.filter(item => 
      columns.some(col => {
        const val = item[col.key];
        return val && String(val).toLowerCase().includes(lower);
      })
    );
  }, [data, search, columns]);

  // Sort
  const sorted = useMemo(() => {
    if (!sortCol) return filtered;
    return [...filtered].sort((a, b) => {
      const av = a[sortCol];
      const bv = b[sortCol];
      if (av < bv) return sortAsc ? -1 : 1;
      if (av > bv) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [filtered, sortCol, sortAsc]);

  // Paginate
  const total = sorted.length;
  const pages = Math.ceil(total / entries);
  const paginated = sorted.slice((page - 1) * entries, page * entries);

  const handleSort = (key) => {
    if (sortCol === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortCol(key);
      setSortAsc(true);
    }
  };

  return (
    <div>
      <div className="ad-dt-top">
        <div className="ad-dt-length">
          <label>
            Show{" "}
            <select value={entries} onChange={(e) => { setEntries(Number(e.target.value)); setPage(1); }}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            {" "}entries
          </label>
        </div>
        <div className="ad-dt-search">
          <label>
            Search:{" "}
            <input 
              type="text" 
              value={search} 
              onChange={(e) => { setSearch(e.target.value); setPage(1); }} 
              placeholder="Search..."
            />
          </label>
        </div>
      </div>

      <div className="ad-dt-wrapper">
        <table className="ad-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} onClick={() => col.sortable !== false && handleSort(col.key)}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    {col.label}
                    {col.sortable !== false && (
                      <span style={{ display: "inline-flex", flexDirection: "column", opacity: sortCol === col.key ? 1 : 0.3 }}>
                        <ChevronUp size={12} color={sortCol === col.key && sortAsc ? "#4e7cff" : "currentColor"} style={{ marginBottom: "-4px" }} />
                        <ChevronDown size={12} color={sortCol === col.key && !sortAsc ? "#4e7cff" : "currentColor"} />
                      </span>
                    )}
                  </div>
                </th>
              ))}
              {(onEdit || onDelete || actionsCustom) && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="ad-empty">No matching records found</td>
              </tr>
            ) : (
              paginated.map((row, idx) => (
                <tr key={row.id || idx}>
                  {columns.map((col) => {
                    if (col.key === 'status') {
                      return (
                        <td key={col.key}>
                          {customStatusBadge ? customStatusBadge(row) : (
                            <span className={`ad-badge ${row.status || row.active ? 'ad-badge-active' : 'ad-badge-inactive'}`}>
                              {row.status || (row.active ? 'Active' : 'Inactive')}
                            </span>
                          )}
                        </td>
                      );
                    }
                    if (col.render) {
                      return <td key={col.key}>{col.render(row)}</td>;
                    }
                    return <td key={col.key}>{row[col.key]}</td>;
                  })}
                  
                  {(onEdit || onDelete || actionsCustom) && (
                    <td>
                      <div className="ad-actions">
                        {actionsCustom && actionsCustom(row)}
                        {onEdit && (
                          <button className="ad-btn-edit" onClick={() => onEdit(row)}>
                            <Edit size={14} /> Edit
                          </button>
                        )}
                        {onDelete && (
                          <button className="ad-btn-delete" onClick={() => {
                            if(confirm("Are you sure you want to delete this?")) onDelete(row);
                          }}>
                            <Trash2 size={14} /> Delete
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="ad-dt-bottom">
        <div>
          Showing {total === 0 ? 0 : (page - 1) * entries + 1} to {Math.min(page * entries, total)} of {total} entries
        </div>
        <div className="ad-pagination">
          <button 
            className="ad-page-btn" 
            disabled={page === 1} 
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          
          {/* Simple pagination numbers */}
          {Array.from({ length: pages }).map((_, i) => (
            <button 
              key={i+1} 
              className={`ad-page-btn ${page === i + 1 ? 'active' : ''}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button 
            className="ad-page-btn" 
            disabled={page === pages || pages === 0} 
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
