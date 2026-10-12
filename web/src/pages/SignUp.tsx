import { useState } from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [isLoading] = useState(false)

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()

        alert('Formulário enviado')

        console.log(name, email, password, passwordConfirm)
}

  return <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">

      <Input
      required 
      legend="Name"
      placeholder="seu nome"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <Input
      required 
      legend="Email"
      type="email"
      placeholder="seu@email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />


  <Input
      required
      legend="Senha"
      type="password"
      placeholder="sua senha"
      onChange={(e) => setPassword(e.target.value)}
    />

    <Input
      required
      legend="Confirmação da Senha"
      type="password"
      placeholder="sua senha"
      onChange={(e) => setPasswordConfirm(e.target.value)}
    />

    <Button type="submit" isLoading={isLoading}>
        Cadastrar
    </Button>

    <a href="/"
    className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
    >
        Já tenho uma conta
    </a>
  </form>
}
