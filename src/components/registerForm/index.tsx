import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useApiContext } from '../../Contexts';
import { schema } from '../../schema';
import { IContactRequest } from '../../interfaces/contacts.interfaces';
import {
  ICustomers,
  ICustomersRequest,
} from '../../interfaces/customers.interfaces';

interface IProps {
  table: string;
}

const RegisterForm = ({ table }: IProps) => {
  const {
    postRegisterContact,
    postRegisterCustomer,
    setCustomerId,
    setCustomer,
    navigate,
  } = useApiContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactRequest | ICustomersRequest>({
    resolver: yupResolver(schema),
  });

  const registerObject = (data: IContactRequest | ICustomersRequest) => {
    table === 'contact'
      ? postRegisterContact(data)
      : postRegisterCustomer(data);
  };

  return (
    <section className="section ">
      {table === 'contact' && (
        <button
          className="text-3xl font-medium text-slate-200 bg-orange-800 hover:bg-orange-700 hover:text-white w-11/12 rounded-lg"
          onClick={(event) => {
            event.preventDefault;
            setCustomerId('');
            setCustomer({} as ICustomers);
            navigate('/');
          }}
        >
          Voltar
        </button>
      )}

      <form
        onSubmit={handleSubmit(registerObject)}
        className="col-center w-11/12 gap-7 h-3/4 "
      >
        <h2 className="font-bold text-3xl mb-4 text-center">
          {table === 'contact' ? 'Cadastre-se seu contato' : 'Cadastre-se'}
        </h2>
        <div className="div-input">
          <label htmlFor="fullName" className="labels">
            Nome Completo
          </label>
          <input type="text" id="fullName" {...register('fullName')} />

          <p className="error">{errors.fullName?.message}</p>
        </div>
        <div className="div-input">
          <label htmlFor="email" className="labels">
            Email
          </label>
          <input type="text" id="email" {...register('email')} />

          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="div-input">
          <label htmlFor="phoneNumber" className="labels">
            Telefone
          </label>
          <input type="number" id="phoneNumber" {...register('phoneNumber')} />

          <p className="error">{errors.phoneNumber?.message}</p>
        </div>
        <button
          type="submit"
          className="bg-blue-700 w-[85%] h-9 rounded-lg text-white text-xl font-semibold"
        >
          Registrar
        </button>
      </form>
    </section>
  );
};

export { RegisterForm };
