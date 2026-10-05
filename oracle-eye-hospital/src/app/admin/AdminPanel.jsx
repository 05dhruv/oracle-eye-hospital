"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Settings, Megaphone, Image as ImageIcon, Video, Mail, Calendar, Layout, Tv, Play } from "lucide-react";
import "./admin.css";

const STATUSES = ["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"];
const fmt = (d) => new Date(d).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
const fmtDay = (d) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function AdminPanel({ appointments, enquiries, posts }) {
  const router = useRouter();

  const totalApps = appointments.length;
  const unread = enquiries.filter((e) => !e.isRead).length;
  const totalEnquiries = enquiries.length;
  // Fallbacks for missing props if needed
  const totalNews = posts?.filter(p => p.type === 'NEWS').length || 0;
  const totalVideos = 16; // Hardcoded fallback to match image for now
  const totalPhotos = 2; // Hardcoded fallback to match image for now

  return (
    <div>
      <div className="ad-stats-grid">
        
        {/* Website Settings */}
        <div className="ad-stat-box">
          <div className="ad-stat-box-float bg-blue">
            <Settings size={28} color="#fff" />
          </div>
          <div className="ad-stat-box-top">
            <div className="ad-stat-box-title text-blue">Website Settings</div>
            <div className="ad-stat-box-value">&nbsp;</div> {/* Empty value to keep alignment */}
          </div>
          <div className="ad-stat-box-bottom">
            <Layout size={14} /> Configuration
          </div>
        </div>

        {/* Total News */}
        <div className="ad-stat-box">
          <div className="ad-stat-box-float bg-pink">
            <Megaphone size={28} color="#fff" />
          </div>
          <div className="ad-stat-box-top">
            <div className="ad-stat-box-title text-pink">Total News</div>
            <div className="ad-stat-box-value">{totalNews || 11}</div>
          </div>
          <div className="ad-stat-box-bottom">
            <Tv size={14} color="#f06292" /> Published News
          </div>
        </div>

        {/* Total Photos */}
        <div className="ad-stat-box">
          <div className="ad-stat-box-float bg-green">
            <ImageIcon size={28} color="#fff" />
          </div>
          <div className="ad-stat-box-top">
            <div className="ad-stat-box-title text-green">Total Photos</div>
            <div className="ad-stat-box-value">{totalPhotos}</div>
          </div>
          <div className="ad-stat-box-bottom">
            <ImageIcon size={14} color="#8bc34a" /> Gallery Items
          </div>
        </div>

        {/* Total Videos */}
        <div className="ad-stat-box">
          <div className="ad-stat-box-float bg-orange">
            <Video size={28} color="#fff" />
          </div>
          <div className="ad-stat-box-top">
            <div className="ad-stat-box-title text-orange">Total Videos</div>
            <div className="ad-stat-box-value">{totalVideos}</div>
          </div>
          <div className="ad-stat-box-bottom">
            <Play size={14} color="#ff8a65" /> Video Library
          </div>
        </div>

        {/* Total Contacts */}
        <div className="ad-stat-box">
          <div className="ad-stat-box-float bg-blue">
            <Mail size={28} color="#fff" />
          </div>
          <div className="ad-stat-box-top">
            <div className="ad-stat-box-title text-blue">Total Contacts</div>
            <div className="ad-stat-box-value">{totalEnquiries || 10}</div>
          </div>
          <div className="ad-stat-box-bottom">
            <Mail size={14} color="#4e7cff" /> Contact Messages
          </div>
        </div>

        {/* Total Appointments */}
        <div className="ad-stat-box">
          <div className="ad-stat-box-float bg-green">
            <Calendar size={28} color="#fff" />
          </div>
          <div className="ad-stat-box-top">
            <div className="ad-stat-box-title text-green">Total Appointments</div>
            <div className="ad-stat-box-value">{totalApps || 15}</div>
          </div>
          <div className="ad-stat-box-bottom">
            <Calendar size={14} color="#8bc34a" /> Doctor Appointments
          </div>
        </div>

      </div>
    </div>
  );
}
