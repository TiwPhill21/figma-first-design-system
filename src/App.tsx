import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Button } from './components/Button';
import { Logo } from './Logo';
import './styles/global.css';

export function App() {

  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className='mt-4'>
          Train Desing
        </Heading>


        <Text size="lg" className="text-gray-300 mt-1">
          Faça Login e comece a usar!
        </Text>
      </header>
      
      <form className='flex flex-col items-stretch gap-4 w-full max-w-[400px] mt-10'>

          <label htmlFor="email" className='font-semibold flex flex-col gap-3'>
             <Text>
              Endereço de E-mail
             </Text>
             <TextInput.Root>
                <TextInput.Icon>
                  <Envelope/>
                </TextInput.Icon>
                <TextInput.Input id='email' type='email' placeholder='Digite seu e-mail'/>
             </TextInput.Root>
          </label>

          <label htmlFor="password" className='font-semibold flex flex-col gap-3'>
             <Text className='font-semibold'>Senha</Text>
             <TextInput.Root>
                <TextInput.Icon>
                  <Lock/>
                </TextInput.Icon>
                
                <TextInput.Input id='password' type='password' placeholder='**************'/>
             </TextInput.Root>
          </label>

          <label htmlFor="remember" className='flex items-center gap-2'>
            <Checkbox id="remember"/>
            <Text size='sm' className='flex items-center gap-2'>
              Lembrar de mim
            </Text>
          </label>

          <Button type="submit" className='mt-4'>Acessar Plataforma</Button>

          </form>


          <footer className='flex flex-col items-center gap-4 mt-8'>
            <Text asChild size='sm'>
              <a href=''className='text-gray-300 underline'>Esqueceu sua senha?</a>
            </Text>
            <Text asChild size='sm'>
              <a href=''className='text-gray-300 underline'>Não possue conta? Crie uma aqui</a>
            </Text>
          </footer>

    </div>
  )
}

