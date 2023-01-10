

let verify = (input) => {
    let s = input.trim(), pairs = [];
    const stack = [];
    const map = new Map([
      ["(", ")"],
      ["[", "]"],
      ["<", ">"],
    ]);
    map.forEach(pair => pairs.push(pair));
    for (let i = 0; i < s.length; i += 1) {
      if (map.has(s[i])) {
        stack.push(map.get(s[i]));
      } else if ([...pairs.values()].includes(s[i]) && s[i] !== stack.pop()) {
        return false;
      }
    }

    return stack.length === 0;
}

console.log(verify("(  [  <>  ()  ]  <>  )"));