import './style.css';
import Trash from '../../assets/trash.svg';

function Home() {
  const users = [
    {
      id: '234asdasd',
      name: 'Maysa',
      age: 20,
      email: 'maysa@email.com',
    },
    {
      id: '56765asdfsd',
      name: 'João',
      age: 22,
      email: 'joao@email.com',
    },
  ];

  return (
    <div className='container'>
      <form action='POST'>
        <h1>Cadastro de Usuários</h1>
        <input name='name' type='text' placeholder='Nome' />
        <input name='age' type='number' placeholder='Idade' />
        <input name='email' type='email' placeholder='Email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>
              Nome: <span>{user.name}</span>{' '}
            </p>
            <p>
              Idade: <span>{user.age}</span>{' '}
            </p>
            <p>
              Email: <span>{user.email}</span>{' '}
            </p>
          </div>
          <button>
            <img src={Trash} alt='Trash icon' />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
