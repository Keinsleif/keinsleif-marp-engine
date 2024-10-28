// import { abbr } from "@mdit/plugin-abbr";
import { alert } from "@mdit/plugin-alert";
import { align } from "@mdit/plugin-align";
import { attrs } from "@mdit/plugin-attrs";
// import { container } from "@mdit/plugin-container";
// import { demo } from "@mdit/plugin-demo";
import { figure } from "@mdit/plugin-figure";
import { footnote } from "@mdit/plugin-footnote";
import { imgLazyload } from "@mdit/plugin-img-lazyload";
// import { imgMark } from "@mdit/plugin-img-mark";
// import { imgSize } from "@mdit/plugin-img-size";
// import { ins } from "@mdit/plugin-ins";
// import { mark } from "@mdit/plugin-mark";
import { ruby } from "@mdit/plugin-ruby";
// import { spoiler } from "@mdit/plugin-spoiler";
import { sub } from "@mdit/plugin-sub";
import { sup } from "@mdit/plugin-sup";
// import { tab } from "@mdit/plugin-tab";
import { tasklist } from "@mdit/plugin-tasklist";
import table_captions  from "markdown-it-table-captions";

import mermaid from "mermaid";

const markdownItMermaid = (md) => {
    md.mermaid = mermaid;

    let defaultRenderer = md.renderer.rules.fence ||
    function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };

    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const code = token.content.trim();
        if (token.info == 'mermaid') {
            return `<div class="mermaid">${code}</div>`;
        }

        return defaultRenderer(tokens, idx, options, env, self)
    }
}

export default ({ marp }) => marp
    // .use(abbr)
    .use(alert)
    .use(align)
    .use(attrs)
    // .use(container)
    // .use(demo)
    .use(figure)
    .use(footnote)
    .use(imgLazyload)
    // .use(imgMark)
    // .use(imgSize)
    // .use(ins)
    // .use(mark)
    .use(ruby)
    // .use(spoiler)
    .use(sub)
    .use(sup)
    // .use(tab)
    .use(tasklist)
    .use(markdownItMermaid)
    .use(table_captions);
