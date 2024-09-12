import { NextRequest } from "next/server";
import { reply } from "../utils";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase.config";
import { verify } from "@/app/api/utils";

export async function GET() {
  try {
    const { docs } = await getDocs(collection(db, "items"));
    const data = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return reply(data, 200);
  } catch {
    return reply({ message: "Server error" }, 500);
  }
}

export async function POST(request: NextRequest) {
  await verify(request);
  const data = await request.json();
  await addDoc(collection(db, "items"), { ...data, active: true });
  return reply(data, 201);
}
