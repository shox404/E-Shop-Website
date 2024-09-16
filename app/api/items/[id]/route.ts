import { NextRequest } from "next/server";
import { reply, verify } from "@/app/api/utils";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase.config";

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: any } }
) {
  await verify(request);
  const data = await request.json();
  await updateDoc(doc(db, "items", id), data);
  return reply(data, 200);
}

export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: any } }
) {
  await verify(request);
  await deleteDoc(doc(db, "items", id));
  return reply({ id }, 200);
}
