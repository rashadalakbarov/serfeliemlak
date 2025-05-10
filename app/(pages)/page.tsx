// components
import SectionHeader from "@/components/SectionHeader";

import EstateCard from "@/components/EstateCard";
import { propertiesData } from "@/datas/properties";

export default function Home() {
  return (
    <>
      <SectionHeader title="Yeni Elanlar" url="tmdsa asasuh "/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center space-y-2 gap-3 py-3">        
        {
          propertiesData.map((item, i) => {
            return (
              <EstateCard key={i} datas={item}/>
            )
          })
        }
      </div>
    </>
  );
}
