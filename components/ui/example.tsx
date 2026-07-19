import { forwardRef, type HTMLAttributes } from "react";
import { cn, cva, type VariantProps } from "../../utils/theme";

const styles = {
  root: cva(""),
};

type ExampleRef = HTMLDivElement;
type ExampleProps = HTMLAttributes<ExampleRef> & VariantProps<typeof styles.root>;

const Example = forwardRef<ExampleRef, ExampleProps>((props, ref) => {
  // props
  const { className, ...rest } = props;

  // hooks

  // render vars

  // jsx
  return <div ref={ref} className={cn(styles.root({ className }))} {...rest}></div>;
});
Example.displayName = "Example";

export { Example };
export type { ExampleProps, ExampleRef };
