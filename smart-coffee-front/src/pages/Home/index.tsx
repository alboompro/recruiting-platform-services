import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import { ToastContainer, toast } from 'react-toastify'

import {
  HomeWrapper,
  InputError,
  InputWrapper,
  RegisterButton,
  RegisterForm,
  RegisterInput,
  RegisterInputLabel,
} from './styles'
import expressoImg from '../../assets/images/coffee.svg'

import { CoffeeCartContext } from '../../contexts/CartContext'
import { api } from '../../services/api'

interface RegisterUserApiResponse {
  message: string
  user: {
    id: number
    name: string
    email: string
    couponCode: string
  }
}

const schema = zod.object({
  name: zod.string().min(5, {
    message: 'O nome deve conter ao menos 5 caracteres',
  }),
  email: zod.string().email({
    message: 'Digite um email válido',
  }),
})

type RegisterFormInputs = zod.infer<typeof schema>

export function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(schema),
  })
  const { registerActiveUser } = useContext(CoffeeCartContext)
  const navigate = useNavigate()

  async function handleRegisterSubmit(user: RegisterFormInputs) {
    try {
      const { data } = await api.post<RegisterUserApiResponse>('/register', {
        name: user.name,
        email: user.email,
      })
      registerActiveUser(data.user)
      navigate('/order', { replace: true })
    } catch (error: any) {
      toast.error('Usuário já registrado', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <HomeWrapper>
      <img src={expressoImg} alt="" />
      <RegisterForm onSubmit={handleSubmit(handleRegisterSubmit)}>
        <InputWrapper>
          <RegisterInputLabel htmlFor="name">Nome completo</RegisterInputLabel>
          <RegisterInput type="text" id="name" {...register('name')} />
          {!!errors.name && <InputError>{errors.name.message}</InputError>}
        </InputWrapper>
        <InputWrapper>
          <RegisterInputLabel htmlFor="email">E-mail</RegisterInputLabel>
          <RegisterInput type="email" id="email" {...register('email')} />
          {!!errors.email && <InputError>{errors.email.message}</InputError>}
        </InputWrapper>
        <RegisterButton>Cadastrar</RegisterButton>
      </RegisterForm>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          backgroundColor: '#F29B91',
          color: 'white',
        }}
      />
    </HomeWrapper>
  )
}
