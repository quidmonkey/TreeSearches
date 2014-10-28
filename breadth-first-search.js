/**
 * Breadth-First Search
 *
 * Searches a DOM-tree for a target node using
 * breadth-first search.
 *
 * @param treeRoot {HTMLElement} Tree root
 * @param targetNode {String|HTMLElement} Target rode: can be a class name, id or html element
 *
 * @return Returns the HTMLElement if target is found; otherwise null;
 *
 * @example bfs(document.body, 'content-wrapper');
 */

var toVisit = [];
var visitedNodes = [];

function bfs (treeRoot, targetNode) {
    var node;

    toVisit.push(treeRoot);

    while (toVisit.length > 0) {
        node = toVisit.shift();
        if (inspectNode(node, targetNode)) {
            return node;
        }

        // breath-first search
        while (node.nextSibling) {
            node = node.nextSibling;
            if (inspectNode(node, targetNode)) {
                return node;
            }
        }
    }

    return null;
}

function inspectNode (node, targetNode) {
    // has node not been visited?
    if (visitedNodes.indexOf(node) === -1) {
        visitedNodes.push(node);

        // enqueue children for next pass
        toVisit.concat(node.children);
    }

    return isTargetNode(node, targetNode);
}

function isTargetNode (node, targetNode) {
    if (typeof targetNode === 'string') {
        return node.id === targetNode || node.classList.contains(targetNode);
    } else if (targetNode instanceof HTMLElement) {
        return node === targetNode;
    }
}
