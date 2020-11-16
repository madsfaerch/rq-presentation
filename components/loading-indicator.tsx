import classNames from "classnames";

type LoadingIndicatorProps = {
  isLoading: boolean;
};

export function LoadingIndicator({ isLoading }: LoadingIndicatorProps) {
  const classes = classNames("loading-indicator mb-3", {
    "loading-indicator--isLoading": isLoading,
  });

  return <div className={classes} />;
}
