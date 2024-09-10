import { NextRequest } from "next/server";
import { reply } from "../utils";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase.config";
import { verify } from "@/app/api/utils";

export async function POST(request: NextRequest) {
  await verify(request);
  const data = await request.json();
  await addDoc(collection(db, "items"), { ...data, active: true });
  return reply(data, 201);
}