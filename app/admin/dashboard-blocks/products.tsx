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
    data: { value: productsAmount },
    angleField: "amount",
    colorField: "title",
    legend: false,
    innerRadius: 0.5,
    labels: [
      { text: "title", style: { fontSize: 10, fill: "#000" } },
      {
        text: "amount",
        style: { fontSize: 20, dy: 17, fontWeight: "bold", fill: "#2e2e2e" },
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
