import Link from "next/link";
import products from "../myproducts";

export default function PageProduct() {
  return (
    <div style={{ textAlign: "center", paddingTop: "30px", fontSize: "30px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {products.map((item, index) => (
          <div key={index}>
            <Link href={`ProductList/${index + 1}`}>
              {products[index].name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
