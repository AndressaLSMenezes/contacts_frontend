import { RegisterForm } from '../../components/registerForm';
import { List } from '../../components/list';
import { useApiContext } from '../../Contexts';
import { useEffect } from 'react';
import { UpdateContact } from '../../components/updateModel';

const HomePage = () => {
  const { getAllCustomers, registerModel } = useApiContext();
  useEffect(() => {
    getAllCustomers();
  }, []);

  return (
    <>
      {registerModel && <UpdateContact table="customer" />}
      <section className="main-section">
        <RegisterForm table="customer" />
        <List table="customer" />
      </section>
    </>
  );
};

export { HomePage };
