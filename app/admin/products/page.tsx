"use client";

import Loader from "@/app/_components/loader";
import { useAppSelector } from "@/app/_store/hooks";
import { useGetItemQuery } from "@/app/_store/services/items";
import { Styles } from "@/app/_styles/admin/products";
import { AppInput, Navbar } from "@/app/_styles/ui/element";
import { Text, Title } from "@/app/_styles/ui/text";
import { Item } from "@/app/global/types";
import { SearchOutlined } from "@ant-design/icons";
import { Carousel, Image } from "antd";
import { ChangeEvent, Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Products() {
  const { items } = useAppSelector((state) => state.items);
  const { isLoading } = useGetItemQuery();
  const [search, setSearch] = useState("");

  const useSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <Fragment>
        <Navbar>
          <Text>Products</Text>
          <AppInput
            prefix={<SearchOutlined />}
            placeholder="Search"
            width={200}
            onChange={useSearch}
          />
        </Navbar>
        <Styles layout>
          <AnimatePresence>
            {items
              .filter((item: Item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((item: Item) => (
                <motion.div
                  className="card"
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="images">
                    <Carousel arrows>
                      {item.images.map((art, index) => (
                        <Image src={art} key={index} className="image" />
                      ))}
                    </Carousel>
                  </div>
                  <div className="footer">
                    <Title>{item.title}</Title>
                    <Text>{item.description}</Text>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </Styles>
      </Fragment>
    );
  }
}
