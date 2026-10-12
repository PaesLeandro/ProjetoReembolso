import { useState } from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading] = useState(false)

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()

        alert('Formulário enviado')
}

  return <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
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
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <Button type="submit" isLoading={isLoading}>
        Entrar
    </Button>

    <a href="/signup"
    className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
    >
        Criar Conta
    </a>
  </form>
}
