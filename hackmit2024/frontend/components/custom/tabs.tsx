import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NodeTabs() {
  const numTabs = 2;
  const [activeTab, setActiveTab] = useState(0);
  const tabValues = Array.from({ length: numTabs }, (_, index) => `tab-${index + 1}`);


  return (
    <div className="w-full h-full max-w-full" >
      <Tabs defaultValue={tabValues[activeTab]} className={`w-full`} style={{padding: 0, margin: 0}}  >
        <div className='w-full max-w-full rounded-none' style={{backgroundColor: '#FAFAFA'}}>
        <TabsList style={{ backgroundColor: '#FAFAFA',  justifyContent: 'flex-start', padding: 0, margin: 0 } }>
          
          {tabValues.map((value, index) => (
            <TabsTrigger
              key={value}
              value={value}
              className={`w-36 rounded-none border-b-2 border-transparent focus:outline-none ${
                activeTab === index
                ? 'bg-[#FFFFFF] text-blue border-blue-500'
                : 'bg-[#F9F9F9] text-gray-500 hover:bg-[#F9F9F9]'
            }`}
            style={{
              textAlign: 'left',  
              padding: '12 px',   
              margin: 0,          
              borderRadius: 0,  
              display: 'flex',   
              alignItems: 'center'  
            }}

              onClick={() => setActiveTab(index)} 
            >
              {`Tab ${index + 1}`}
            </TabsTrigger>
          ))}
        </TabsList>
        </div>
        {tabValues.map((value, index) => (
          <TabsContent key={value} value={value}>
            <div>
              <h1>{`Content for Tab ${index + 1}`}</h1>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
