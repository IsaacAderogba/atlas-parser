export enum ASTNodeType {
  Program = "Program",
  ExpressionStatement = "ExpressionStatement",
  BlockStatement = "BlockStatement",
  EmptyStatement = "EmptyStatement",
  BinaryExpression = "BinaryExpression",
  LogicalExpression = "LogicalExpression",
  UnaryExpression = "UnaryExpression",
  AssignmentExpression = "AssignmentExpression",
  MemberExpression = "MemberExpression",
  CallExpression = "CallExpression",
  ThisExpression = "ThisExpression",
  ClassDeclaration = "ClassDeclaration",
  VariableStatement = "VariableStatement",
  VariableDeclaration = "VariableDeclaration",
  FunctionDeclaration = "FunctionDeclaration",
  ReturnStatement = "ReturnStatement",
  IfStatement = "IfStatement",
  WhileStatement = "WhileStatement",
  DoWhileStatement = "DoWhileStatement",
  ForStatement = "ForStatement",
  Identifier = "Identifier",
  NumericLiteral = "NumericLiteral",
  StringLiteral = "StringLiteral",
  BooleanLiteral = "BooleanLiteral",
  NullLiteral = "NullLiteral",
  Super = "Super",
  NewExpression="NewExpression"
}

export type ASTNode = {
  type: ASTNodeType;
  value?: any;
  body?: any;
  expression?: any;
};

export const ASTFactory: {
  [key in keyof typeof ASTNodeType]: (...value: any[]) => ASTNode;
} = {
  Program: (body: any) => ({
    type: ASTNodeType.Program,
    body,
  }),
  ExpressionStatement: (expression: string) => ({
    type: ASTNodeType.ExpressionStatement,
    expression,
  }),
  BlockStatement: (body: string) => ({
    type: ASTNodeType.BlockStatement,
    body,
  }),
  EmptyStatement: () => ({
    type: ASTNodeType.EmptyStatement,
  }),
  BinaryExpression: (operator, left, right) => ({
    type: ASTNodeType.BinaryExpression,
    operator,
    left,
    right,
  }),
  LogicalExpression: (operator, left, right) => ({
    type: ASTNodeType.LogicalExpression,
    operator,
    left,
    right,
  }),
  UnaryExpression: (operator, argument) => ({
    type: ASTNodeType.UnaryExpression,
    operator,
    argument,
  }),
  AssignmentExpression: (operator, left, right) => ({
    type: ASTNodeType.AssignmentExpression,
    operator,
    left,
    right,
  }),
  MemberExpression: (computed, object, property) => ({
    type: ASTNodeType.MemberExpression,
    computed,
    object,
    property,
  }),
  CallExpression: (callee, args) => ({
    type: ASTNodeType.CallExpression,
    callee,
    arguments: args,
  }),
  NewExpression: (callee, args) => ({
    type: ASTNodeType.NewExpression,
    callee,
    arguments: args,
  }),
  ThisExpression: () => ({
    type: ASTNodeType.ThisExpression,
  }),
  Super: () => ({
    type: ASTNodeType.Super,
  }),
  VariableStatement: (declarations) => ({
    type: ASTNodeType.VariableStatement,
    declarations,
  }),
  VariableDeclaration: (id, init) => ({
    type: ASTNodeType.VariableDeclaration,
    id,
    init,
  }),
  FunctionDeclaration: (name, params, body) => ({
    type: ASTNodeType.FunctionDeclaration,
    name,
    params,
    body,
  }),
  ClassDeclaration: (id, superClass, body) => ({
    type: ASTNodeType.ClassDeclaration,
    id,
    superClass,
    body,
  }),
  ReturnStatement: (argument) => ({
    type: ASTNodeType.ReturnStatement,
    argument,
  }),
  IfStatement: (test, consequent, alternate) => ({
    type: ASTNodeType.IfStatement,
    test,
    consequent,
    alternate,
  }),
  WhileStatement: (test, body) => ({
    type: ASTNodeType.WhileStatement,
    test,
    body,
  }),
  DoWhileStatement: (body, test) => ({
    type: ASTNodeType.DoWhileStatement,
    test,
    body,
  }),
  ForStatement: (init, test, update, body) => ({
    type: ASTNodeType.ForStatement,
    init,
    test,
    update,
    body,
  }),
  NumericLiteral: (value) => ({
    type: ASTNodeType.NumericLiteral,
    value,
  }),
  StringLiteral: (value) => ({
    type: ASTNodeType.StringLiteral,
    value,
  }),
  BooleanLiteral: (value) => ({
    type: ASTNodeType.BooleanLiteral,
    value,
  }),
  NullLiteral: () => ({
    type: ASTNodeType.NullLiteral,
    value: null,
  }),
  Identifier: (name) => ({
    type: ASTNodeType.Identifier,
    name,
  }),
};
