describe("Root test", () => {
  it("should work", () => {
    // arrange
    const program = `

    // number
    /**
     * Comment
     */
    "42"
    `;

    // act
    const ast = parser.parse(program);

    // assert
    expect(ast).toEqual({
      type: "Program",
      body: {
        type: "StringLiteral",
        value: "42",
      },
    });
  });
});