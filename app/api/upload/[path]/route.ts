import { storage } from "@/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { type NextRequest } from "next/server";
import { reply } from "../../utils";

export async function POST(
  request: NextRequest,
  { params: { path } }: { params: { path: string } }
) {
  const formData = await request.formData();
  const file = formData.get("file");
  if (!file || !(file instanceof Blob)) {
    return reply({ msg: "No file uploaded" }, 400);
  }
  const id = Math.floor(Date.now() * Math.random() * 1000);
  const storageRef = ref(storage, `${path}/${id + file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return reply(url, 200);
}
