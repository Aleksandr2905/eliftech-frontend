import { Form } from "../../components/Form";
import { registration } from "../../data";

export const RegisterPage: React.FC = () => {
  const { title } = registration;
  return (
    <section>
      <div className="container min-h-[calc(100vh-181px)] flex my-auto flex-col">
        <h2 className="text-primaryText text-center text-lg font-gilroySemibold mb-6">
          {title}
        </h2>
        <Form />
      </div>
    </section>
  );
};
