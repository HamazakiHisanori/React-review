import "./styles.css";

import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfile, loading, error } = useAllUsers();

  const onClickGetDate = () => {
    getUsers();
  };

  return (
    <div className="App">
      <h1>React復習</h1>
      <br />
      <button onClick={onClickGetDate}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
