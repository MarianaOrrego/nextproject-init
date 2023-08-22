"use client";

export default function Page() {
  return (
    <div>
      <h1>Page</h1>
      <button
        onClick={() => {
          alert("Hello World");
        }}
      >
        Click
      </button>
    </div>
  );
}
