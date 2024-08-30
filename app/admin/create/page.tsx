"use client";

import Loader from "@/app/_components/loader";
import { Styles } from "@/app/_styles/admin/create";
import { Navbar } from "@/app/_styles/ui/element";
import { Text } from "@/app/_styles/ui/text";
import { Fragment } from "react";

export default function Create() {
  if (false) {
    return <Loader />;
  } else {
    return (
      <Fragment>
        <Navbar>
          <Text>Create</Text>
        </Navbar>
        <Styles></Styles>
      </Fragment>
    );
  }
}
