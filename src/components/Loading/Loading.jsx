import { RotatingLines } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <RotatingLines
      strokeColor="orange"
      strokeWidth="4"
      animationDuration="0,75"
      width="70"
      visible={true}
    />
  );
};
