import { useEffect } from 'react';
import { RegisterForm } from '../../components/registerForm';
import { List } from '../../components/list';
import { useApiContext } from '../../Contexts';
import { UpdateContact } from '../../components/updateModel';

const Dashboard = () => {
  const { getAllContactsByCustomerId, registerModel } = useApiContext();
  useEffect(() => {
    getAllContactsByCustomerId();
  }, []);
  return (
    <>
      {registerModel && <UpdateContact table="contact" />}
      <section className="row-center flex-wrap w-screen h-screen gap-6 bg-[#111827]">
        <RegisterForm table="contact" />
        <List table="contact" />
      </section>
    </>
  );
};

export { Dashboard };
