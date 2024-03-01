import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function NavbarInicio() {

  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let navbarComponent
  

  return (
    <>
      <div className='w-full bg-green-600  text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase ml-10'>Desenvolvendo  o Bem</Link>

          <div className='flex gap-4'>
          <Link to='/login' className='hover:underline'>Login</Link>
            <Link to='/sobre' className='hover:underline'>Quem somos</Link>
            <div className='hover:underline'>Produtos</div>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
            <Link to='/contato' className='hover:underline'>Contato</Link>
            <Link to='' onClick={logout} className='hover:underline mr-10'>Sair</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarInicio