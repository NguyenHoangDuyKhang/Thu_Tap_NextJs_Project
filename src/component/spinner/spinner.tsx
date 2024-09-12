import { Loader } from "@mantine/core";

function Spinner({ size = "lg", color = "blue", variant = "dots" }) {
  return <Loader size={size} color={color} variant={variant} />;
}

export default Spinner;