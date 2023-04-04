import { useApiContext } from '../../Contexts';
import { Card } from '../card';

interface IProps {
  table: string;
}

const List = ({ table }: IProps) => {
  const { listContacts, listCustomers, customer } = useApiContext();

  return (
    <section className="section pt-5">
      <h2 className="text-white font-bold text-3xl text-center ">
        Todos os{' '}
        {table === 'contact' ? `Contatos de ${customer.fullName}` : 'Clientes'}
      </h2>
      <ul className="h-[88%] flex flex-row justify-center flex-wrap gap-4 overflow-auto">
        {table === 'contact'
          ? listContacts.map((contact) => (
              <Card obj={contact} key={contact.id} table={table} />
            ))
          : listCustomers.map((customer) => (
              <Card obj={customer} key={customer.id} table={table} />
            ))}
      </ul>
    </section>
  );
};

export { List };
