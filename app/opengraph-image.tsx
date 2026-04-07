import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FlowDesk - Workflow Automation for Indian Ops Teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F172A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px",
            border: "2px solid #6366F1",
            display: "flex",
          }}
        />
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#6366F1",
              border: "2px solid #C8FF00",
              transform: "rotate(3deg)",
            }}
          />
          <span
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "white",
              fontFamily: "system-ui",
            }}
          >
            Flow<span style={{ color: "#6366F1" }}>Desk</span>
          </span>
        </div>
        
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            marginBottom: "24px",
            lineHeight: 1.2,
          }}
        >
          Automate your ops
          <br />
          with{" "}
          <span style={{ color: "#C8FF00" }}>Plain English</span>
        </h1>
        
        <p
          style={{
            fontSize: "24px",
            color: "#94A3B8",
            textAlign: "center",
          }}
        >
          Built for Indian ops teams • No coding required
        </p>
        
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "0",
            right: "0",
            textAlign: "center",
            fontSize: "14px",
            color: "#475569",
          }}
        >
          flowdesk.io
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}