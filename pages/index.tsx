import Link from "next/link";

const index = () => {
  const users = [
    {
      id: 1,
      age: 10,
      name: "test"
    },
    {
      id: 2,
      age: 30,
      name: "test2"
    },
  ];

  return (
    <div>
      <h3>This is a home page</h3>
      <p>Below is list of dynamic users list links</p>
      <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={{
            pathname: `/user/[id]/[age]`,
            query: {id: user.id, age: user.age}
          }}>
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
    </div>
  )
}

/**
 * pathname: `/user/[id]/[age]`,
            query: {id: user.id, age: user.age}
  takes us to /user/1/10 for given sample data.
 */

export default index;
