import React from 'react';
import { Card } from '@/components/ui/card';

interface SupplyChainNodeProps {
  title: string;
  inputs: string[];
  function: string;
  players: string[];
  index: number;
}

const SupplyChainNode = ({ title, inputs, function: func, players, index }: SupplyChainNodeProps) => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <Card className="p-6 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-secondary">Inputs:</h4>
            <p className="text-sm text-gray-600">{inputs.join(", ")}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-secondary">Function:</h4>
            <p className="text-sm text-gray-600">{func}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-secondary">Key Players:</h4>
            <p className="text-sm text-gray-600">{players.join(", ")}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SupplyChainNode;