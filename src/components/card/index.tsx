import { useApiContext } from '../../Contexts';
import { IContact } from '../../interfaces/contacts.interfaces';
import { ICustomers } from '../../interfaces/customers.interfaces';
import { BsTrash3, BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';

export interface IProps {
  obj: IContact | ICustomers;
  table: string;
}

const Card = ({ obj, table }: IProps) => {
  const { fullName, email, phoneNumber, id } = obj;
  const {
    setRegisterModel,
    setContactId,
    setCustomerId,
    deleteContact,
    deleteCustomer,
    getAllContactsByCustomerId,
    navigate,
    setCustomer,
  } = useApiContext();
  return (
    <li className="w-2/5 max-w-[14rem] min-w-[12rem] bg-blue-700 rounded col-center p-3 max-h-64 ">
      <div className="w-full bg-blue-700 col-center gap-3 py-3 mb-4">
        <h3>{fullName}</h3>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
      <nav className="w-full rounded row-center gap-4">
        {table === 'customer' && (
          <button
            className="card-btn hover:bg-green-500 "
            onClick={(event) => {
              navigate('/dashboard');
              setCustomerId(id);
              setCustomer(obj);
              localStorage.setItem('@CustomerId', JSON.stringify(id));
              localStorage.setItem('@Customer', JSON.stringify(obj));
              getAllContactsByCustomerId;
            }}
          >
            <BsInfoCircle />
          </button>
        )}
        <button
          className="card-btn hover:bg-amber-500"
          onClick={(event) => {
            event.preventDefault();
            setRegisterModel(true);
            if (table === 'contact') {
              setContactId(id);
            } else {
              setCustomerId(id);
            }
          }}
        >
          <AiOutlineEdit />
        </button>
        <button
          className="card-btn hover:bg-red-500"
          onClick={(event) => {
            event.preventDefault();
            if (table === 'contact') {
              setContactId(id);
              deleteContact(id);
            } else {
              setCustomerId(id);
              deleteCustomer(id);
            }
          }}
        >
          <BsTrash3 />
        </button>
      </nav>
    </li>
  );
};

export { Card };
