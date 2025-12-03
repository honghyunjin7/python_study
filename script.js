document.addEventListener('DOMContentLoaded', () => {
    const highlightNumbers = (node) => {
        // Only process text nodes that are not inside a script or style tag
        if (node.nodeType === Node.TEXT_NODE && node.parentNode.tagName !== 'SCRIPT' && node.parentNode.tagName !== 'STYLE') {
            const textContent = node.textContent;
            // Regex to find numbers: integers, decimals, and numbers possibly preceded by a currency symbol
            // This regex will find numbers like "123", "456", "789", "2025", "100.50", "10", "3.14", "99", "0.75"
            // It tries to capture numbers without capturing surrounding non-numeric characters too broadly.
            const regex = /(?<![a-zA-Z0-9\-\.])(\b\d+(\.\d+)?\b)/g;

            if (regex.test(textContent)) {
                const fragment = document.createDocumentFragment();
                let lastIndex = 0;

                textContent.replace(regex, (match, p1, offset) => {
                    // Add text before the number
                    if (offset > lastIndex) {
                        fragment.appendChild(document.createTextNode(textContent.substring(lastIndex, offset)));
                    }

                    // Add the highlighted number
                    const span = document.createElement('span');
                    span.classList.add('highlight-number');
                    span.textContent = match; // Use match as it includes the exact part found by regex
                    fragment.appendChild(span);

                    lastIndex = offset + match.length;
                    return match;
                });

                // Add any remaining text after the last number
                if (lastIndex < textContent.length) {
                    fragment.appendChild(document.createTextNode(textContent.substring(lastIndex)));
                }

                // Replace the original text node with the fragment
                node.parentNode.replaceChild(fragment, node);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
            // Recursively call for child nodes
            for (let i = 0; i < node.childNodes.length; i++) {
                highlightNumbers(node.childNodes[i]);
            }
        }
    };

    // Start highlighting from the body
    highlightNumbers(document.body);
});