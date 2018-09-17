var myStyles = ['#268D02']

d3.selectAll('.item')
  .data(myStyles)
  .style('background',myStyles[0])
