import React from 'react';
import SupplyChainNode from '@/components/SupplyChainNode';
import ConnectionLine from '@/components/ConnectionLine';

const supplyChainData = [
  {
    title: "Raw Materials",
    inputs: ["Silicon", "rare earth elements", "cobalt", "copper", "gold"],
    function: "Foundation for manufacturing chips and electronic components",
    players: ["Mining companies", "refining facilities"],
  },
  {
    title: "Semiconductor Manufacturing",
    inputs: ["Silicon wafers", "photolithography", "doping processes"],
    function: "Create chips with billions of transistors for processing",
    players: ["TSMC", "Samsung", "Intel"],
  },
  // ... Add more data as needed
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">
          AI Supply Chain Visualization
        </h1>
        <div className="max-w-2xl mx-auto space-y-2">
          {supplyChainData.map((node, index) => (
            <React.Fragment key={index}>
              <SupplyChainNode {...node} index={index} />
              {index < supplyChainData.length - 1 && <ConnectionLine />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;