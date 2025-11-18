// Name: Other blocks 2.0
// ID: OtherBlocksByShaman2016
// Description: Extension for Other blocks 2.0
// By: shaman2016 <https://scratch.mit.edu/users/shaman2016/>
// License: MIT
// Version: 1.0

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed");
  }
  OtherBlocksByShaman2016 = {
    list: [],
    info: {},
    cb: {},
    types: {
      command: Scratch.BlockType.COMMAND,
      reporter: Scratch.BlockType.REPORTER,
      boolean: Scratch.BlockType.BOOLEAN,
      array: Scratch.BlockType.ARRAY,
      object: Scratch.BlockType.OBJECT,
      hat: Scratch.BlockType.HAT,
      label: Scratch.BlockType.LABEL,
    },
    isRun: {},
    bodies: {},
  }
  OtherBlocksByShaman2016.blocks = {
    id: "OtherBlocksByShaman2016",
    name: "Other blocks 2.0",
    color1: "#a3c0e1",
    blocks: [
      {
        opcode: "NewOtherBlock",
        blockType: Scratch.BlockType.COMMAND,
        text: "Create block [name], [args], [type]",
        arguments: {
          name: {
            defaultValue: "hello, [name]!",
            type: Scratch.ArgumentType.STRING,
          },
          args: {
            defaultValue: '{name:{defaultValue:"Ivan Ivanov",type:OtherBlocksByShaman2016.argType.string}}',
            type: Scratch.ArgumentType.OBJECT,
          },
          type: {
            defaultValue: "command",
            type: Scratch.ArgumentType.STRING,
          },
        },
      },
      {
        opcode: "Opredelit",
        blockType: Scratch.BlockType.HAT,
        text: "defune [id]",
        arguments: {
          id: {
            defaultValue: "1",
            type: Scratch.ArgumentType.STRING,
          },
        },
      },
      {
        opcode: "GetIdOB",
        blockType: Scratch.BlockType.REPORTER,
        text: "Get the ID of the last other block",
        arguments: {},
      },
    ],
  }

  class OtherBlocks {
    getInfo() {
      return OtherBlocksByShaman2016.blocks;
    }
NewOtherBlock(args) {
  const id = OtherBlocksByShaman2016.list.length + 1;
  OtherBlocksByShaman2016.info[id] = {
    name: args.name,
    args: JSON.parse(args.args),
    type: args.type,
    id: id
  }
  OtherBlocksByShaman2016.blocks.blocks.push({
    opcode: `callFunction_${id}`,
    blockType: OtherBlocksByShaman2016.types[args.type],
    text: args.name,
    arguments: OtherBlocksByShaman2016.info[id].args
  })
  OtherBlocksByShaman2016.cb[`callFunction_${id}`] = (callArgs) => {
    if (!OtherBlocksByShaman2016.bodies[id]) {
      throw new Error(`Функция с id=${id} не определена (нет Opredelit)`);
    }
  };

  OtherBlocksByShaman2016.list.push(id);
}
Opredelit(args) {
  const id = args.id;
  OtherBlocksByShaman2016.bodies[id] = true;
  return true;
}
GetIdOB() {
  return OtherBlocksByShaman2016.list.length
}
  }
  Scratch.extensions.register(new OtherBlocks());
})(Scratch);
