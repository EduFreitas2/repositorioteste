import planeta from '../../assets/idea-logo-2.jpg';
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';

import './Home.css';

function Home() {
    return (
      <>
        <div>    
            <div className="grid grid-cols-2
            pt-20
            pb-20
            items-center
            justify-center">
                <div className='flex flex-col 
                items-center
                justify-center
                space-y-10'>
                    <div className='ml-3'>
                        <h1 className="text-5xl">
                            Desenvolvendo o Bem
                        </h1>
                    </div>
                    <div className='ml-20'><p>Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Veritatis facilis ducimus quod praesentium, pariatur porro libero quibusdam hic, 
                        temporibus voluptate excepturi corporis eveniet quaerat! Rerum suscipit fuga voluptates atque reiciendis?</p>			</div>
                        <div className="flex justify-around gap-4">
              <ModalProduto/>
              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
            </div>
                    
                </div>  
                <div className=' flex items-center
                justify-center'>
                    <div className=' '>
                    <img src={planeta} alt="" className='size-102 
                                                        pr-0' />
                    </div>
                    
                </div>
        </div>
        <div className='grid grid-cols-3
        '>
                <div className='flex flex-col bg-slate-500
                items-center
                justify-center'> 
                    <h2>Comércio Justo!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Corporis amet fugiat laborum odio non ea commodi consequuntur consequatur!
                         Asperiores autem, quo quis alias eum iure? Molestias quisquam optio provident molestiae?</p></div>
                <div className='bg-orange-500
                pt-30
                items-center
                justify-center'> 
                    <h2>Oportunidades de Negócios!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Corporis amet fugiat laborum odio non ea commodi consequuntur consequatur!
                     Asperiores autem, quo quis alias eum iure? Molestias quisquam optio provident molestiae?</p>
                     </div>
                <div className='bg-lime-500
                pt-30'>
                    <h2>Oportunidades de Negócios!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Corporis amet fugiat laborum odio non ea commodi consequuntur consequatur!
                     Asperiores autem, quo quis alias eum iure? Molestias quisquam optio provident molestiae?</p>
                </div>

        </div>
        
      <ListaProdutos />
        
   </div>
 
      </>
  );
  }
  export default Home;
