const getElementsByClassName = (target) => {
  let output = [];
  let topNodes = document.children;
  function traverse(nodes) {
    for (const node of nodes) {
      if (node.classList === target) {
        output.push(node);
      }
      if (node.children === undefined) {
        continue;
      }
      let kids = node.children;
      traverse(kids);
    }
    return;
  }
  output = traverse(topNodes);
  return output;
};

module.exports = { getElementsByClassName };
