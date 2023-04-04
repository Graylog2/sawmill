import spacings from './spacings';

describe('spacings', () => {
    it('exports spacings', () => {
        expect(spacings).toMatchInlineSnapshot(`
{
  "0": "0px",
  "1": "1px",
  "lg": "1.68rem",
  "md": "1.04rem",
  "px": {
    "0": 0,
    "1": 1,
    "lg": 27,
    "md": 17,
    "sm": 10,
    "xl": 44,
    "xs": 6,
    "xxl": 70,
    "xxs": 4,
  },
  "sm": "0.64rem",
  "xl": "2.72rem",
  "xs": "0.40rem",
  "xxl": "4.40rem",
  "xxs": "0.24rem",
}
`);
    });
});