export default function Button({ onClick, label }) {
  console.log("Rendering:", label);
  return <button onClick={onClick}>{label}</button>;
}
