import styles from "../../styles/Users.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return {
    props: { users: data },
  };
};

const Users = ({ users }) => {

  return (
    <div>
      <h1>All Users</h1>
      {users.map((user) => (
        <Link href={"/users/" + user.id} key={user.id}>
          <a className={styles.single}>
            <h2 className={styles.name}>{user.name}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Users;
