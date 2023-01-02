import GlassPane from "@/components/GlassPane";
import React from "react";
import "@/styles/global.css";
const DashboardLayout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
};

export default DashboardLayout;
