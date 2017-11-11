const ACTIONS = {
  EDITOR_UPDATE: 'EDITOR_UPDATE',
  FILE_ADD: 'FILE_ADD',
};

const EXPRESSIONS = {
  codeBlock: /(?:^`{3})[\w|\W]+?(?:`{3})/gm,
  codeInline: /`{1}(?!`)(.+)`{1}/gm,
  link: /\[(.+)\]\((.+)\)/gm,
  ol: /^([-*+]|\s{2}[-*+])(?=\s)\s(.+)/gm,
  h1: /^#{1}(?!#)(?=\s{1})\s(.+)/gm,
  h2: /^#{2}(?!#)(?=\s{1})\s(.+)/gm,
  h3: /^#{3}(?!#)(?=\s{1})\s(.+)/gm,
};

export default { ACTIONS };
export {
  ACTIONS,
  EXPRESSIONS,
};
