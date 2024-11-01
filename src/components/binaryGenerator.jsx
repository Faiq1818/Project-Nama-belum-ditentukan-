export function BinaryGenerator() {
  function decimalToBinary(N) {
    return (N >>> 0).toString(2);
  }

  let N = Math.floor(Math.random() * 1000);
  let binary = decimalToBinary(N);

  return <>{binary}</>;
}
