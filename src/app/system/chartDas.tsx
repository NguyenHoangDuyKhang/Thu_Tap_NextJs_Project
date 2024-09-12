import { AreaChart } from '@mantine/charts';
const data = [
    {
      date: 'Mar 22',
      Apples: 110,
    },
    {
      date: 'Mar 23',
      Apples: 60,
    },
    {
      date: 'Mar 24',
      Apples: -80,
    },
    {
      date: 'Mar 25',
      Apples: 40,
    },
    {
      date: 'Mar 26',
      Apples: -40,
    },
    {
      date: 'Mar 27',
      Apples: 80,
    },
  ];
  

function Charts() {
  return (
    <AreaChart
    h={300}
    data={data}
    dataKey="date"
    type="split"
    strokeWidth={2}
    dotProps={{ r: 3, strokeWidth: 1 }}
    activeDotProps={{ r: 3, strokeWidth: 1 }}
    series={[{ name: 'Apples', color: 'bright' }]}
  />
  );
}

export default Charts;