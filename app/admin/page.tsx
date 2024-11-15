"use client";

import Loader from "@/app/_components/loader";
import Box from "./dashboard-blocks/box";
import Products from "./dashboard-blocks/products";
import { Styles } from "@/app/_styles/admin/dashboard";
import { Navbar } from "@/app/_styles/ui/element";
import { Text } from "@/app/_styles/ui/text";
import { ProductFilled } from "@ant-design/icons";
import { useAppSelector } from "../_store/hooks";
import { useGetItemQuery } from "../_store/services/items";

export default function Dashboard() {
  const { items } = useAppSelector((state) => state);

  const itmLen = items.items.length;

  useGetItemQuery();

  return (
    <Loader is={false}>
      <Navbar>
        <Text>Dashboard</Text>
      </Navbar>
      <Styles>
        <div className="boxes">
          <Box
            icon={<ProductFilled />}
            title={`${itmLen} product${itmLen <= 1 ? "" : "s"}`}
            text="All shop items"
          />
          <Box
            icon={<ProductFilled />}
            title={`${itmLen} product${itmLen <= 1 ? "" : "s"}`}
            text="Sold products today"
          />
          <Box
            icon={<ProductFilled />}
            title={`${itmLen} product${itmLen <= 1 ? "" : "s"}`}
            text="All shop items"
          />
        </div>
        <div className="blocks">
          <Products />
        </div>
      </Styles>
    </Loader>
  );
}
