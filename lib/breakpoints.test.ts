import breakpoints from './breakpoints';

describe('breakpoints', () => {
    it('exports breakpoints', () => {
        expect(breakpoints).toMatchInlineSnapshot(`
{
  "max": {
    "lg": "1199px",
    "md": "991px",
    "sm": "767px",
    "xs": "479px",
  },
  "min": {
    "lg": "1200px",
    "md": "992px",
    "sm": "768px",
    "xs": "480px",
  },
  "px": {
    "max": {
      "lg": 1199,
      "md": 991,
      "sm": 767,
      "xs": 479,
    },
    "min": {
      "lg": 1200,
      "md": 992,
      "sm": 768,
      "xs": 480,
    },
  },
}
`);
    })
});