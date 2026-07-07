const fs = require("fs");
const path = require("path");

function buildTree() {
    const folderPath = path.join(__dirname, "../data/files");

    const files = fs
        .readdirSync(folderPath)
        .filter(file => file.endsWith(".md"));

    const tree = {
        name: "300-product",
        type: "folder",
        children: [
            {
                name: "310-product-a",
                type: "folder",
                children: []
            }
        ]
    };

    const product = tree.children[0];

    // Governance folder
    const governance = {
        name: "310-governance",
        type: "folder",
        children: []
    };

    product.children.push(governance);

    // Store epic folders by code (311, 312, ...)
    const epicFolders = {};

    files.forEach(file => {

        const name = file.replace(".md", "");
        const parts = name.split("-");

        const prefix = parts[0];

        // Governance files
        if (prefix === "310") {
            governance.children.push({
                name: file,
                type: "file"
            });
            return;
        }

        // Example:
        // 311-100-epic-epic-a
        // 311-110-feature-feature-a

        if (!epicFolders[prefix]) {

            let folderName = prefix;

            // Find the epic name from the 100 file
            if (parts[1] === "100") {

                // Remove "311-100-epic-"
                folderName = `${prefix}-${parts.slice(3).join("-")}`;

            } else {

                folderName = `${prefix}-epic`;

            }

            epicFolders[prefix] = {
                name: folderName,
                type: "folder",
                children: []
            };

            product.children.push(epicFolders[prefix]);
        }

        epicFolders[prefix].children.push({
            name: file,
            type: "file"
        });

    });

    return tree;
}

module.exports = buildTree;