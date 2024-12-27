export default function Balance({ balance }) {
  return (
    <div>
      <h5 className="font-bold text-xs leading-none">YOUR BALANCE</h5>
      <h4 className="balance">${balance}</h4>
    </div>
  );
}
