import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { createPortal } from 'react-dom';

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
  const [nodeRect, setNodeRect] = useState<DOMRect | null>(null);
  const nodeRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (nodeRef.current) {
      setNodeRect(nodeRef.current.getBoundingClientRect());
    }
    setIsExpanded(true);
  };

  return (
    <div className="relative" ref={nodeRef}>
      <Handle type="target" position={Position.Left} className="w-2 h-2" />
      <div 
        className="w-[300px] bg-white rounded-lg shadow-lg border border-gray-200"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary mb-2">{data.title}</h3>
          <p className="text-sm text-gray-600">{data.summary}</p>
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="w-2 h-2" />
      
      {isExpanded && nodeRect && createPortal(
        <div 
          className="fixed bg-white rounded-b-lg border border-gray-200 shadow-lg origin-top animate-[expand_0.2s_ease-out]"
          style={{
            top: nodeRect.bottom + window.scrollY,
            left: nodeRect.left + window.scrollX,
            width: nodeRect.width,
            zIndex: 9999,
          }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div className="p-4 space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-1">Key Players</h4>
              <p className="text-sm text-gray-600">{data.players.join(", ")}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-1">Inputs</h4>
              <p className="text-sm text-gray-600">{data.inputs.join(", ")}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-1">Risks</h4>
              <p className="text-sm text-gray-600">{data.risks.join(", ")}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-1">Opportunities</h4>
              <p className="text-sm text-gray-600">{data.opportunities.join(", ")}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default ValueChainNode;