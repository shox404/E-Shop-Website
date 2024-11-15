import { Pie } from "@ant-design/plots";
import { PieBox } from "@/app/_styles/admin/dashboard";
import { useAppSelector } from "@/app/_store/hooks";
import { useGetCategoryQuery } from "@/app/_store/services/category";

export default function Products() {
  const {
    items: { productsAmount },
  } = useAppSelector((state) => state);

  useGetCategoryQuery();

  const config = {
    data: { value: productsAmount || [] },
    angleField: "value",
    colorField: "name",
    legend: false,
    innerRadius: 0.5,
    labels: [
      { text: "name", style: { fontSize: 10, fontWeight: "bold" } },
      {
        text: (d: any, i: any, data: any) => (i < data.length ? d.value : ""),
        style: {
          fontSize: 15,
          dy: 20,
        },
      },
    ],
    style: {
      stroke: "#fff",
      inset: 1,
      radius: 15,
    },
    scale: {
      color: {
        palette: "spectral",
        offset: (t: number) => t * 0.8 + 0.1,
      },
    },
  };
  return (
    <PieBox>
      <Pie {...config} />
    </PieBox>
  );
}
