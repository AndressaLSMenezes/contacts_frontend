// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { ICustomersRequest } from "../../interfaces/customers.interfaces";
// import { useApiContext } from "../../Contexts";
// import { schema } from "../../schema";

const Dashboard = () => {
  // const { postRegisterCustomers } = useApiContext();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<ICustomersRequest>({
  //   resolver: yupResolver(schema),
  // });

  return (
    <>
      {/* <section className="col-center w-screen h-screen bg-gray-700">
        <div className="col-center gap-5 w-4/6 min-w-[18rem] max-w-[30rem]">
          <h1 className="font-bold text-3xl text-white">Contacts</h1>
          <form
            onSubmit={handleSubmit(postRegisterCustomers)}
            className="col-center w-[90%] gap-5 bg-gray-300 py-3"
          >
            <h2 className="font-bold text-xl">Cadastre-se</h2>
            <div className="flex flex-col w-[85%] gap-3">
              <label htmlFor="fullName">Nome Completo</label>
              <input type="text" id="fullName" {...register("fullName")} />

              <p className="text-red-600">{errors.fullName?.message}</p>
            </div>
            <div className="flex flex-col w-[85%] gap-3">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" {...register("email")} />

              <p className="text-red-600">{errors.email?.message}</p>
            </div>
            <div className="flex flex-col w-[85%] gap-3">
              <label htmlFor="phoneNumber">Telefone</label>
              <input
                type="number"
                id="phoneNumber"
                {...register("phoneNumber")}
              />

              <p className="text-red-600">{errors.phoneNumber?.message}</p>
            </div>
            <button
              type="submit"
              className="bg-indigo-800 w-[85%] h-9 rounded-lg text-white text-xl font-semibold"
            >
              Registrar
            </button>
          </form>
        </div>
      </section> */}
    </>
  );
};

export { Dashboard };
