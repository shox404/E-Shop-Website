"use client";

import Loader from "@/app/_components/loader";
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
        <Styles></Styles>
      </Fragment>
    );
  }
}
