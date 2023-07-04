export default function Manager({ manager }) {
  return (
    <p className="shadow-sm bg-body-tertiary border rounded px-4 py-3">
      The current game is managed by
      <br />
      <span className="fst-italic fw-semibold">{manager}</span>
    </p>
  );
}
