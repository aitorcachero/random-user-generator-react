import Loader from './components/Loader/Loader';
import { debounce } from 'debounce';
import UserCard from './components/UserCard/UserCard';
import useRandomUsers from './hooks/useRandomUsers';

function App() {
  const { loading, users, filtered, handleChange, handleSubmit } =
    useRandomUsers();

  return (
    <>
      {!users && !loading && (
        <>
          <form onSubmit={handleSubmit}>
            <h2 className="h2">¿Cuantas personas quieres renderizar?</h2>
            <input
              type="text"
              className="input-search"
              placeholder="Introduce cantidad"
            ></input>
            <button type="submit">Renderizar</button>
          </form>
        </>
      )}
      {loading && <Loader />}

      {filtered && (
        <>
          <div className="filter-container">
            <input
              className="input-filter"
              placeholder="Filtrar por nombre..."
              onChange={debounce(handleChange, 1000)}
            />
          </div>
          <div className="grid-container">
            <ul>
              {filtered.map((user) => {
                return (
                  <li key={user.login.uuid}>
                    <UserCard user={user} />
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default App;
