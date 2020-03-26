let sizes = [4, 8, 15, 16, 23, 42];

d3.selectAll("p")
  .style("font-size",function(d,i){ return `${sizes[i]}px`});

let body = d3.select('body')
mijnDiv= body.append('div')
for (let i = 0; i < 6; i++) {
    mijnDiv.append('p')      
    .text('Proin in neque at nibh semper consectetur. Fusce urna felis, porta vel tempor nec, ornare at nisl. Morbi felis quam.')
    .style("font-size",`${sizes[i]}px`);

}
