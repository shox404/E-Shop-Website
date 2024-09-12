"use client";

import Loader from "@/app/_components/loader";
import Box from "./@dashboard/box";
import { Styles } from "@/app/_styles/admin/dashboard";
import { Navbar } from "@/app/_styles/ui/element";
import { Text } from "@/app/_styles/ui/text";
import { Fragment } from "react";

export default function Dashboard() {
  if (false) {
    return <Loader />;
  } else {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}
