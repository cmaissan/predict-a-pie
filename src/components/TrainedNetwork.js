import './TrainedNetwork.scss';
import Neuron from './Neuron';
import TensorFlowNetwork from './TensorFlowNetwork';
import React from 'react';
import { v4 as uuid } from 'uuid';

const network = [
  [
    {
      'id': uuid(),
      'label': 'Crust',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Cherries',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Egg',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Sugar',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Soap',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Onion',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Tomato',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Cheese',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Blueberries',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Pecan',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Cashew',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Peach',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Corn',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Chocolate',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Pumpkin',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Coconut',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Honey',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Strawberry',
      'type': 'input'
    },
    {
      'id': uuid(),
      'label': 'Spinach',
      'type': 'input'
    }
  ],
  [
    {
      'id': uuid(),
      'label': 'Sweet',
      'type': 'output'
    },
    {
      'id': uuid(),
      'label': 'Quiche',
      'type': 'output'
    },
    {
      'id': uuid(),
      'label': 'Pizza',
      'type': 'output'
    },
    {
      'id': uuid(),
      'label': 'Disgusting',
      'type': 'output'
    }
  ]
];

function TrainedNetwork() {

  const [inputs, setInputs] = React.useState(network[0]);
  const [outputs, setOutputs] = React.useState(network[1]);

  const onChange = () => {
    setInputs([...inputs]);
  };

  return (
    <div className="TrainedNetwork">
      <div className="TrainedNetwork-layers">
        <div className="Layer">
          <div className="Layer-neurons">
            {inputs.map(neuron => (
              <Neuron
                key={neuron.id}
                neuron={neuron}
                onChange={onChange}
              />
            ))}
          </div>
        </div>
        <TensorFlowNetwork />
        <div className="Layer">
          <div className="Layer-neurons">
            {outputs.map(neuron => (
              <Neuron
                key={neuron.id}
                neuron={neuron}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainedNetwork;
