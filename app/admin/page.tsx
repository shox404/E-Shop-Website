"use client";

import Loader from "@/app/_components/loader";
import Box from "./@dashboard/box";
import { Styles } from "@/app/_styles/admin/dashboard";
import { Navbar } from "@/app/_styles/ui/element";
import { Text } from "@/app/_styles/ui/text";

export default function Dashboard() {
  return (
    <Loader is={false}>
      <Navbar>
        <Text>Dashboard</Text>
      </Navbar>
      <Styles>
        <div className="boxes">
          <Box />
          <Box />
          <Box />
        </div>
      </Styles>
    </Loader>
  );
}
