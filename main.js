function sort(width, height, length, mass) {
  if ([width, height, length, mass].some((x) => x <= 0)) {
    return "INVALID";
  }

  const volume = width * height * length;
  const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
  const isHeavy = mass >= 20;

  return isBulky && isHeavy ? "REJECTED" : isBulky || isHeavy ? "SPECIAL" : "STANDARD";
}

// prettier-ignore
function testSortFunction() {
  const testCases = [
    { params: [200, 200, 200, 30], expected: "REJECTED", description: "Both bulky and heavy" },
    { params: [200, 200, 200, 10], expected: "SPECIAL", description: "Only bulky" },
    { params: [1, 1, 1, 25], expected: "SPECIAL", description: "Only heavy" },
    { params: [1, 1, 1, 1], expected: "STANDARD", description: "Neither bulky nor heavy" },
    { params: [1000, 1000, 1, 1], expected: "SPECIAL", description: "Exactly on bulky boundary (volume)" },
    { params: [1, 1, 1, 20], expected: "SPECIAL", description: "Exactly on heavy boundary" },
    { params: [0, 0, 0, 0], expected: "INVALID", description: "Invalid case with zero dimensions" },
    { params: [-1, 1, 1, 1], expected: "INVALID", description: "Invalid case with negative dimension" },
    { params: [150, 1, 1, 1], expected: "SPECIAL", description: "Exactly on one bulky dimension" },
  ];

  testCases.forEach((testCase, index) => {
    const result = sort(...testCase.params);
    if (result !== testCase.expected) {
      console.log(`Test case ${index + 1} failed: Expected '${testCase.expected}', got ${result}`);
    } else {
      console.log(`Test case ${index + 1} passed`);
    }
  });
}

testSortFunction();
