import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';

interface ValueChainNodeProps {
  data: {
    title: string;
    summary: string;
    inputs: string[];
    players: string[];
    risks: string[];
    opportunities: string[];
  };
}

const ValueChainNode = ({ data }: ValueChainNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} className="w-2 h-2" />
      <div 
        className="w-[300px] bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-primary">{data.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{data.summary}</p>
        </div>
        
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[400px]' : 'max-h-0'}`}>
          <div className="p-4 space-y-3">
            <div>
              <h4 className="text-sm font-medium text-secondary">Key Players:</h4>
              <p className="text-sm text-gray-600">{data.players.join(", ")}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-secondary">Inputs:</h4>
              <p className="text-sm text-gray-600">{data.inputs.join(", ")}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-secondary">Risks:</h4>
              <p className="text-sm text-gray-600">{data.risks.join(", ")}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-secondary">Opportunities:</h4>
              <p className="text-sm text-gray-600">{data.opportunities.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="w-2 h-2" />
    </div>
  );
};

export default ValueChainNode;