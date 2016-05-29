const cat = {
  speak: function speak() {
    return "meow";
  }
};

describe("cat", function() {
  it("says meow", function() {
    expect(cat.speak()).toBe("meow");
  });
});
