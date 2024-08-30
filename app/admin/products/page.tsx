"use client";

import Loader from "@/app/_components/loader";
import { Styles } from "@/app/_styles/admin/products";
import { Navbar } from "@/app/_styles/ui/element";
import { Text } from "@/app/_styles/ui/text";
import { Fragment } from "react";

export default function Products() {
  if (false) {
    return <Loader />;
  } else {
    return (
      <Fragment>
        <Navbar>
          <Text>Products</Text>
        </Navbar>
        <Styles></Styles>
      </Fragment>
    );
  }
}
