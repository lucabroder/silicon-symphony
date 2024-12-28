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
    position: { x: 0, y: 0 },
    data: {
      title: "Raw Materials",
      summary: "Foundation for manufacturing chips and electronic components",
      inputs: ["Silicon", "rare earth elements", "cobalt", "copper", "gold"],
      players: ["Mining companies", "refining facilities"],
      risks: ["Supply chain disruptions", "Resource scarcity"],
      opportunities: ["New material development", "Sustainable mining"]
    }
  },
  {
    id: '2',
    type: 'valueChain',
    position: { x: 350, y: 0 },
    data: {
      title: "Semiconductor Manufacturing",
      summary: "Create chips with billions of transistors for processing",
      inputs: ["Silicon wafers", "photolithography", "doping processes"],
      players: ["TSMC", "Samsung", "Intel"],
      risks: ["Technical complexity", "High capital costs"],
      opportunities: ["Advanced node development", "New architectures"]
    }
  },
  {
    id: '3',
    type: 'valueChain',
    position: { x: 700, y: 0 },
    data: {
      title: "Chip Packaging and Testing",
      summary: "Package and test for connectivity and functionality",
      inputs: ["Fabricated chips"],
      players: ["ASE Technology", "Amkor Technology"],
      risks: ["Quality control issues", "Testing complexity"],
      opportunities: ["Advanced packaging solutions", "Testing automation"]
    }
  },
  {
    id: '4',
    type: 'valueChain',
    position: { x: 1050, y: 0 },
    data: {
      title: "GPUs and AI Accelerators",
      summary: "High-performance hardware for parallel processing",
      inputs: ["Specialized chips (GPUs, TPUs)"],
      players: ["NVIDIA", "AMD", "Google (TPU)", "Intel"],
      risks: ["Market competition", "Rapid obsolescence"],
      opportunities: ["AI-specific architectures", "Performance improvements"]
    }
  },
  {
    id: '5',
    type: 'valueChain',
    position: { x: 0, y: 200 },
    data: {
      title: "Interconnects and Networking",
      summary: "Enable communication between GPUs, CPUs, and servers",
      inputs: ["Networking hardware", "high-speed interconnects"],
      players: ["NVIDIA (NVLink)", "Mellanox", "Broadcom"],
      risks: ["Bandwidth limitations", "Latency issues"],
      opportunities: ["New interconnect technologies", "Network optimization"]
    }
  },
  {
    id: '6',
    type: 'valueChain',
    position: { x: 350, y: 200 },
    data: {
      title: "Data Centers",
      summary: "House and operate the hardware for AI workloads",
      inputs: ["Servers", "GPUs", "power", "cooling systems"],
      players: ["AWS", "Google Cloud", "Microsoft Azure", "Equinix"],
      risks: ["Energy costs", "Capacity planning"],
      opportunities: ["Edge computing", "Sustainable operations"]
    }
  },
  {
    id: '7',
    type: 'valueChain',
    position: { x: 700, y: 200 },
    data: {
      title: "Power and Cooling Infrastructure",
      summary: "Manage power consumption and thermal efficiency",
      inputs: ["Renewable energy sources", "advanced cooling solutions"],
      players: ["Schneider Electric", "Vertiv", "renewable energy providers"],
      risks: ["Energy efficiency", "Environmental impact"],
      opportunities: ["Green energy adoption", "Cooling innovations"]
    }
  },
  {
    id: '8',
    type: 'valueChain',
    position: { x: 1050, y: 200 },
    data: {
      title: "Data Supply Chain",
      summary: "Provide high-quality datasets for training",
      inputs: ["Raw data", "labeling", "cleaning processes"],
      players: ["Scale AI", "Appen", "Figure Eight"],
      risks: ["Data quality", "Privacy concerns"],
      opportunities: ["Automated labeling", "Synthetic data"]
    }
  },
  {
    id: '9',
    type: 'valueChain',
    position: { x: 0, y: 400 },
    data: {
      title: "AI Training and Inferencing",
      summary: "Train models and deploy them for predictions",
      inputs: ["Hardware", "data", "algorithms"],
      players: ["OpenAI", "DeepMind", "Hugging Face"],
      risks: ["Training costs", "Model accuracy"],
      opportunities: ["Transfer learning", "Efficient training"]
    }
  },
  {
    id: '10',
    type: 'valueChain',
    position: { x: 350, y: 400 },
    data: {
      title: "AI Models and Frameworks",
      summary: "Build and deploy architectures (e.g., GPT, ResNet)",
      inputs: ["Algorithms", "computational resources"],
      players: ["Google (TensorFlow)", "Facebook (PyTorch)"],
      risks: ["Technical debt", "Framework lock-in"],
      opportunities: ["New architectures", "Model optimization"]
    }
  },
  {
    id: '11',
    type: 'valueChain',
    position: { x: 700, y: 400 },
    data: {
      title: "AI Cloud Platforms",
      summary: "Deliver AI tools and infrastructure on-demand",
      inputs: ["Integrated infrastructure", "models", "APIs"],
      players: ["AWS", "Google Cloud", "Microsoft Azure"],
      risks: ["Vendor lock-in", "Cost management"],
      opportunities: ["Platform integration", "Service expansion"]
    }
  },
  {
    id: '12',
    type: 'valueChain',
    position: { x: 1050, y: 400 },
    data: {
      title: "Applications and Software Ecosystem",
      summary: "Build real-world applications",
      inputs: ["AI models", "cloud tools"],
      players: ["Adobe (Sensei)", "Salesforce (Einstein)", "startups"],
      risks: ["Market adoption", "Integration challenges"],
      opportunities: ["New use cases", "Industry solutions"]
    }
  },
  {
    id: '13',
    type: 'valueChain',
    position: { x: 0, y: 600 },
    data: {
      title: "End-User Hardware",
      summary: "Bring AI capabilities into devices",
      inputs: ["Consumer-facing AI hardware"],
      players: ["Apple", "Tesla", "consumer electronics manufacturers"],
      risks: ["Hardware limitations", "User adoption"],
      opportunities: ["Edge AI", "New device categories"]
    }
  },
  {
    id: '14',
    type: 'valueChain',
    position: { x: 350, y: 600 },
    data: {
      title: "Services and Deployment",
      summary: "Tailor AI to industries via consulting and integration",
      inputs: ["Trained models", "applications"],
      players: ["Accenture", "Deloitte", "specialized firms"],
      risks: ["Implementation complexity", "Project management"],
      opportunities: ["Industry expertise", "Custom solutions"]
    }
  },
  {
    id: '15',
    type: 'valueChain',
    position: { x: 700, y: 600 },
    data: {
      title: "Ethics and Regulation",
      summary: "Ensure responsible AI use and compliance",
      inputs: ["Governance frameworks", "ethical guidelines"],
      players: ["Governments", "NGOs", "industry coalitions"],
      risks: ["Regulatory changes", "Compliance costs"],
      opportunities: ["Responsible AI", "Industry standards"]
    }
  }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, type: 'smoothstep' },
  { id: 'e2-3', source: '2', target: '3', animated: true, type: 'smoothstep' },
  { id: 'e3-4', source: '3', target: '4', animated: true, type: 'smoothstep' },
  { id: 'e4-5', source: '4', target: '5', animated: true, type: 'smoothstep' },
  { id: 'e5-6', source: '5', target: '6', animated: true, type: 'smoothstep' },
  { id: 'e6-7', source: '6', target: '7', animated: true, type: 'smoothstep' },
  { id: 'e7-8', source: '7', target: '8', animated: true, type: 'smoothstep' },
  { id: 'e8-9', source: '8', target: '9', animated: true, type: 'smoothstep' },
  { id: 'e9-10', source: '9', target: '10', animated: true, type: 'smoothstep' },
  { id: 'e10-11', source: '10', target: '11', animated: true, type: 'smoothstep' },
  { id: 'e11-12', source: '11', target: '12', animated: true, type: 'smoothstep' },
  { id: 'e12-13', source: '12', target: '13', animated: true, type: 'smoothstep' },
  { id: 'e13-14', source: '13', target: '14', animated: true, type: 'smoothstep' },
  { id: 'e14-15', source: '14', target: '15', animated: true, type: 'smoothstep' }
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