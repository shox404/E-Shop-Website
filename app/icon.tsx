import { ImageResponse } from "next/og";

export const size = { width: 35, height: 35 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          borderRadius: 10,
        }}
      >
        E
      </div>
    ),
    {
      ...size,
    }
  );
}
