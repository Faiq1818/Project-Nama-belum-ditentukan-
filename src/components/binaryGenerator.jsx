export function BinaryGenerator() {
  function decimalToBinary(N) {
    return (N >>> 0).toString(2);
  }

  let N = Math.floor(Math.random() * 100);
  let binary = decimalToBinary(N);

  return <>{binary}</>;
}
