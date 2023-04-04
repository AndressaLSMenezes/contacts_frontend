import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useApiContext } from '../../Contexts';
import { IContactUpdate } from '../../interfaces/contacts.interfaces';
import { ICustomersUpdate } from '../../interfaces/customers.interfaces';
import { schemaUpdate } from '../../schema';

interface IProps {
  table: string;
}

const UpdateContact = ({ table }: IProps) => {
  const { setRegisterModel, updateContact, updateCustomer } = useApiContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactUpdate | ICustomersUpdate>({
    resolver: yupResolver(schemaUpdate),
  });

  const filterFormData = <T extends Record<string, any>>(data: T): T => {
    const filteredData = {} as T;
    for (const key in data) {
      if (data[key] !== '') {
        filteredData[key] = data[key];
      }
    }
    return filteredData;
  };

  const updateObject = (data: IContactUpdate | ICustomersUpdate) => {
    const obj = filterFormData(data) as IContactUpdate | ICustomersUpdate
    table === 'contact'
      ? updateContact(obj as IContactUpdate)
      : updateCustomer(obj as ICustomersUpdate);
  };

  return (
    <section className="col-center w-screen h-screen bg-black fixed z-10">
      <form
        onSubmit={handleSubmit(updateObject)}
        className="col-center w-[90%] max-w-md gap-7 py-3 h-5/6 bg-indigo-900 rounded-xl"
      >
        <div className="row-center justify-between w-[85%]  mb-4">
          <h2 className="font-bold text-3xl ">
            {table === 'contact' ? 'Edite seu contato' : 'Edite se perfil'}
          </h2>
          <button
            className="font-bold text-xl bg-blue-800 text-slate-300  hover:bg-blue-700 hover:text-white  w-10 h-10 rounded-xl hover:drop-shadow-3xl"
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setRegisterModel(false);
            }}
          >
            X
          </button>
        </div>
        <div className="div-input">
          <label htmlFor="fullName" className="labels">
            Nome Completo
          </label>
          <input
            type="text"
            id="fullName"
            {...register('fullName', { required: false })}
          />

          <p className="error">{errors.fullName?.message}</p>
        </div>
        <div className="div-input">
          <label htmlFor="email" className="labels">
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register('email', { required: false })}
          />

          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="div-input">
          <label htmlFor="phoneNumber" className="labels">
            Telefone
          </label>
          <input
            type="number"
            id="phoneNumber"
            {...register('phoneNumber', { required: false })}
          />

          <p className="error">{errors.phoneNumber?.message}</p>
        </div>
        <button
          type="submit"
          className=" w-[85%] h-9 rounded-lg text-xl font-semibold hover:text-white hover:bg-green-600 text-slate-300 bg-green-700"
        >
          Registrar
        </button>
      </form>
    </section>
  );
};

export { UpdateContact };
