import { FC } from 'react';

import { Box, Typography } from '@material-ui/core';
import { Chart, ArgumentAxis, ValueAxis, LineSeries, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Animation, Palette } from '@devexpress/dx-react-chart';
import { schemeSet2 } from 'd3-scale-chromatic';

import { ILineChartProps } from './types';
import { useStyles } from './LineChart.styles';

const LineChart: FC<ILineChartProps> = ({ data }) => {
  const { container, root, item, title } = useStyles();

  const format = () => (tick: string) => tick;

  const Item = (props: Legend.ItemProps) => <Legend.Item className={item} {...props} />;
  const Root = (props: Legend.RootProps) => <Legend.Root className={root} {...props} />;

  return (
    <Box className={container}>
      <Typography className={title}>доходы и расходы по месяцам</Typography>
      <Chart data={data}>
        <ArgumentAxis tickFormat={format} />
        <ValueAxis labelComponent={(props) => <ValueAxis.Label {...props} text={`${props.text}т₽`} />} />
        <Palette scheme={schemeSet2} />
        <LineSeries name="Доходы" valueField="incomes" argumentField="month" />
        <LineSeries name="Расходы" valueField="expenses" argumentField="month" />
        <Legend position="bottom" rootComponent={Root} itemComponent={Item} />
        <Animation />
      </Chart>
    </Box>
  );
};

export { LineChart };
