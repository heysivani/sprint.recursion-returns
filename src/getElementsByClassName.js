const getElementsByClassName = (target) => {
  let output = [];
  let topNodes = document.children;
  function traverse(nodes) {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].classList[0] === target) {
        output.push(nodes[i]);
      }
      if (nodes[i].children === undefined) {
        continue;
      }
      let kids = nodes[i].children;
      traverse(kids);
    }
    return;
  }
  traverse(topNodes);
  return output;
};

module.exports = { getElementsByClassName };
