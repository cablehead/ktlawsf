export default (props) =>
  <div
    css={{
      '@media (max-width: 599px)': {
        display: `grid`,
        gridTemplateColumns: `auto`,
      },
      '@media (min-width: 600px)': {
        display: `grid`,
        gridColumnGap: `30px`,
        gridTemplateColumns: `33% auto`,
      },
    }}
  >
    {props.children}
  </div>

