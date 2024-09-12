"use client";

import Loader from "@/app/_components/loader";
import { useAppSelector } from "@/app/_store/hooks";
import { useGetItemQuery } from "@/app/_store/services/items";
import { Styles } from "@/app/_styles/admin/products";
import { Navbar } from "@/app/_styles/ui/element";
import { Text, Title } from "@/app/_styles/ui/text";
import { Item } from "@/app/global/types";
import { Image } from "antd";
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
        </Navbar>
        <Styles>
          <div className="card">
            <div className="image">
              <Image.PreviewGroup>
                <Image src="" />
              </Image.PreviewGroup>
            </div>
            <Title>Product</Title>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis ut, consequuntur numquam quam magni nam ducimus deleniti aspernatur, dolores enim, reiciendis temporibus obcaecati laboriosam qui aperiam inventore tenetur id!</Text>
          </div>
          {items.map((item: Item, index: number) => (
            <div key={index} className="card">{item.title}</div>
          ))}
        </Styles>
      </Fragment>
    );
  }
}
