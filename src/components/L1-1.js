export default (props) =>
  <div
    css={{
      display: `grid`,
      gridColumnGap: `20px`,
      gridTemplateColumns: `repeat(auto-fill, minmax(280px, 1fr))`,
    }}
  >
    {props.children}
  </div>
