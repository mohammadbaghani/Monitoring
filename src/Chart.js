


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './Chart.css';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function App(props) {

  const data = [



    {
      "دما": props.t,
      uv: 3490,
      pv: 4300,
      amt: props.title
    },

  ];







  return (



    <ResponsiveContainer width="100%" height="100%" className="parent">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        className="chidl-parent" >
     
        <XAxis dataKey="amt" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey= "دما"  fill="rgb(153, 5, 5)" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>
  );

}

