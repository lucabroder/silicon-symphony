import React from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ValueChainNode from '@/components/ValueChainNode';

const nodeTypes = {
  valueChain: ValueChainNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'valueChain',
    position: { x: 0, y: 100 },
    data: {
      title: "Raw Materials",
      summary: "Foundation for manufacturing chips and electronic components",
      inputs: ["Silicon", "rare earth elements", "cobalt", "copper", "gold"],
      players: ["Mining companies", "refining facilities"],
      risks: ["Supply chain disruptions", "Geopolitical tensions"],
      opportunities: ["New material development", "Recycling innovations"]
    }
  },
  {
    id: '2',
    type: 'valueChain',
    position: { x: 350, y: 100 },
    data: {
      title: "Semiconductor Manufacturing",
      summary: "Create chips with billions of transistors for processing",
      inputs: ["Silicon wafers", "photolithography", "doping processes"],
      players: ["TSMC", "Samsung", "Intel"],
      risks: ["High capital requirements", "Technical complexity"],
      opportunities: ["Advanced node development", "New architectures"]
    }
  },
  {
    id: '3',
    type: 'valueChain',
    position: { x: 700, y: 100 },
    data: {
      title: "Chip Packaging",
      summary: "Package and test chips for functionality",
      inputs: ["Fabricated chips", "Testing equipment"],
      players: ["ASE Technology", "Amkor Technology"],
      risks: ["Quality control", "Yield management"],
      opportunities: ["Advanced packaging solutions", "Integration innovations"]
    }
  }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, type: 'smoothstep' },
  { id: 'e2-3', source: '2', target: '3', animated: true, type: 'smoothstep' }
];

const Index = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = React.useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          AI Supply Chain Visualization
        </h1>
        <div className="w-full h-[800px] border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            className="bg-white"
          >
            <Background />
            <Controls />
            <MiniMap />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
};

export default Index;