import EstateCard from "@/components/EstateCard";
import { propertiesData } from "@/datas/properties";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3 place-items-center sm:place-items-stretch">
        {
          propertiesData.map((item, i) => {
            return (
              <EstateCard key={i} datas={item}/>
            )
          })
        }
      </div>
    </div>
  );
}
