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
  OtherBlocksByShaman2016 = {}
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
  OtherBlocksByShaman2016.list.push('New')
  OtherBlocksByShaman2016.info[OtherBlocksByShaman2016.list.length] = {
    "name": args.name,
    "args": args.args,
    "type": args.type,
  }
  OtherBlocksByShaman2016.blocks.blocks.push(
    {
      "opcode": `OtherBlocksByShaman2016.cb[${OtherBlocksByShaman2016.list.length}]`,
      "blockType": OtherBlocksByShaman2016.types[OtherBlocksByShaman2016.info[OtherBlocksByShaman2016.list.length].type],
      "text": OtherBlocksByShaman2016.info[OtherBlocksByShaman2016.list.length].name,
      "arguments": OtherBlocksByShaman2016.info[OtherBlocksByShaman2016.list.length].args,
    }
  )
}
GetIdOB() {
  return OtherBlocksByShaman2016.list.length
}
  }
  Scratch.extensions.register(new OtherBlocks());
})(Scratch);
