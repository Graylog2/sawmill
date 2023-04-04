import fonts from './fonts';

describe('fonts', () => {
    it('exports fonts', () => {
        expect(fonts).toMatchInlineSnapshot(`
Object {
  "family": Object {
    "body": "\\"Source Sans Pro\\", \\"Helvetica Neue\\", Helvetica, Arial, sans-serif",
    "monospace": "\\"Ubuntu Mono\\", Menlo, Monaco, Consolas, \\"Courier New\\", monospace",
    "navigation": "\\"DM Sans\\", \\"Helvetica Neue\\", Helvetica, Arial, sans-serif",
  },
  "lineHeight": "1.24px",
  "size": Object {
    "body": Object {
      "px": "16px",
      "rem": "1rem",
      "value": 16,
    },
    "h1": Object {
      "px": "25.192479778106133px",
      "rem": "1.5745299861316333rem",
      "value": 25.192479778106133,
    },
    "h2": Object {
      "px": "20.738515249935997px",
      "rem": "1.2961572031209998rem",
      "value": 20.738515249935997,
    },
    "h3": Object {
      "px": "19.436284207999996px",
      "rem": "1.2147677629999998rem",
      "value": 19.436284207999996,
    },
    "h4": Object {
      "px": "18.215823999999998px",
      "rem": "1.1384889999999999rem",
      "value": 18.215823999999998,
    },
    "h5": Object {
      "px": "17.072px",
      "rem": "1.067rem",
      "value": 17.072,
    },
    "h6": Object {
      "px": "16px",
      "rem": "1rem",
      "value": 16,
    },
    "huge": Object {
      "px": "22.127995771681707px",
      "rem": "1.3829997357301067rem",
      "value": 22.127995771681707,
    },
    "large": Object {
      "px": "17.072px",
      "rem": "1.067rem",
      "value": 17.072,
    },
    "medium": Object {
      "px": "16px",
      "rem": "1rem",
      "value": 16,
    },
    "navigation": Object {
      "px": "14.99531396438613px",
      "rem": "0.9372071227741331rem",
      "value": 14.99531396438613,
    },
    "root": Object {
      "px": "16px",
      "value": 16,
    },
    "small": Object {
      "px": "14.053715055657104px",
      "rem": "0.878357190978569rem",
      "value": 14.053715055657104,
    },
    "tiny": Object {
      "px": "13.17124185159991px",
      "rem": "0.8232026157249944rem",
      "value": 13.17124185159991,
    },
  },
}
`);
    })
})