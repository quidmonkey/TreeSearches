/**
 * Depth-First Search
 *
 * Searches a DOM-tree for a target node using
 * depth-first search.
 *
 * @param node {HTMLElement} Node to search
 * @param targetNode {String|HTMLElement} Target node: can be a class name, id or html element
 *
 * @return Returns the HTMLElement if target is found; otherwise null;
 *
 * @example dfs(document.body, 'content-wrapper');
 */

var visitedNodes = [];

// targetNode can be a class name, id or html element
function dfs (node, targetNode) {
    var i = 0;
    var childNode;
    var res;

    if (isTargetNode(node, targetNode)) {
        return node;
    }

    // mark node as visited
    visitedNodes.push(node);

    for (i = 0; i < node.children.length; i++) {
        childNode = node.children[i];

        // has node not been visited?
        if (visitedNodes.indexOf(childNode) === -1) {

            // search recursively
            res = dfs(childNode, targetNode);

            // was the targetNode found?
            if (res) {
                return res;
            }
        }
    }

    return null;
}

function isTargetNode (node, targetNode) {
    if (typeof targetNode === 'string') {
        return node.id === targetNode || node.classList.contains(targetNode);
    } else if (targetNode instanceof HTMLElement) {
        return node === targetNode;
    }
}
