module.exports = {
    reporters: [
      'default',
      [ 'jest-junit', {
        outputDirectory: './tests',
        outputName: 'Test.xml',
      } ]
    ]
  }
  