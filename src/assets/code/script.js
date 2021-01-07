const fs = require('fs');

function createDir(dir) {
    fs.mkdir(`./${dir}`,function(err){
        if (err) {
            return console.error(err);
        }
        console.log(`${dir}目录创建成功。`);
     });
}

const dirss = [
  // './bar/bar-basic',
  // './bar/bar-stacked',
  // './bar/bar-grouped',
  // './bar/bar-percent',
  // './bar/bar-range',
  // './column/column-basic',
  // './column/column-stacked',
  // './column/column-grouped',
  // './column/column-percent',
  // './column/column-range',
  // './pie/pie-basic',
  // './pie/donut-basic',
  // './gauge/gauge-basic',
  // './waterfall/waterfall-basic',
  // './scatter/scatter-basic',
  // './treemap/treemap-basic',
  // './sankey/sankey-basic',
  // './chord/chord-basic',
  // './stock/stock',
  // './funnel/funnel',
  // './word-cloud/word-cloud',

  // './sunburst',
  // './radial-bar',
  // './box',

  './sunburst/sunburst',
  './radial-bar/radial-bar',
  './box/box',

];

function createF(name) {
    fs.writeFile(name + ".ts.md", "``` js ```", function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
    fs.writeFile(name + ".html.md", "``` html ```", function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
    fs.writeFile(name + ".module.md", "``` js ```", function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  }

// for (const it of dirss) {
//     createDir(it);
// }

setTimeout(() => {
    for (const it of dirss) {
        createF(it);
    }
}, 3000);


