import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadsDir = path.join(process.cwd(), "public", "uploads");

  // Create directory if it doesn't exist
  try {
    await mkdir(uploadsDir, { recursive: true });
  } catch (err) {
    console.error("Failed to create uploads directory:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }

  const filePath = path.join(uploadsDir, file.name);

  try {
    await writeFile(filePath, buffer);
  } catch (err) {
    console.error("Failed to write file:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }

  return NextResponse.json({ message: "File uploaded successfully!" }, { status: 200 });
}
