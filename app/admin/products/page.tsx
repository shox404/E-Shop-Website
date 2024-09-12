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
import { Fragment } from "react";

export default function Products() {
  const { items } = useAppSelector((state) => state.items);
  const { isLoading } = useGetItemQuery();

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
          />
        </Navbar>
        <Styles>
          {items.map((item: Item, index: number) => (
            <div className="card" key={index}>
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
            </div>
          ))}
        </Styles>
      </Fragment>
    );
  }
}
