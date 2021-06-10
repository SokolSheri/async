import Link from "next/link";

// const handleSubmit = async (event) => {
//   event.preventDefault();

//   const res = await fetch("/api/hello", {
//     body: JSON.stringify({
//       answer: event.target[0].value,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//   });

//   const result = await res.json();
//   console.log(result.text);
// };

export default function FirstPost() {
  return (
    <>
      <h1>All users with Todos</h1>

      <Link href="/users/1">
        <p>User 1</p>
      </Link>
      <Link href="/users/2">
        <p>User 2</p>
      </Link>
      <Link href="/users/3">
        <p>User 3</p>
      </Link>
      <Link href="/users/4">
        <p>User 4</p>
      </Link>
      <Link href="/users/5">
        <p>User 5</p>
      </Link>
      <Link href="/users/6">
        <p>User 6</p>
      </Link>
      <Link href="/users/7">
        <p>User 7</p>
      </Link>
      <Link href="/users/8">
        <p>User 8</p>
      </Link>
      <Link href="/users/9">
        <p>User 9</p>
      </Link>
      <Link href="/users/10">
        <p>User 10</p>
      </Link>

      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
