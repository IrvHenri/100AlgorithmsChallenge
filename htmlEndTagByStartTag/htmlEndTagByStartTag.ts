export function htmlEndTagByStartTag(startTag: string): string {
  let word = "";
  for (let i = 0; i < startTag.length; i++) {
    let char = startTag[i];

    if (char === " ") {
      word = startTag.split("").splice(0, i).join("").slice(1);
      console.log(word);

      return `</${word}>`;
    }
    if (char === ">") {
      word = startTag.split(">")[0].slice(1);
      return `</${word}>`;
    }
  }
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
