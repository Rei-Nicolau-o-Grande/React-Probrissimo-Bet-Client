import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";

function FormLoginUser() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const [openModal, setOpenModal] = useState(false);

    const onSubmitLoginUser = (data) => {
        console.log(data);
    };

    console.log({ errors });

    function onCloseModal() {
        setOpenModal(false);
        reset();
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)} color={"success"} className={"my-3"} pill>Entar</Button>
            <Modal dismissible show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmitLoginUser)}>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Entrar na sua Conta</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Seu email"
                                       color={`${errors.email ? 'failure' : ''}`}/>
                                </div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    placeholder="email@email.com"
                                    color={`${errors.email ? 'failure' : ''}`}
                                    {...register("email",{
                                        required: true,
                                        validate: (value) => validator.isEmail(value)
                                    })}
                                    helperText={
                                        errors?.email?.type === "required" ? 'Campo obrigatório.' : '' ||
                                        errors?.email?.type === "validate" ? 'Email inválido.' : ''
                                    }
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Sua Senha"
                                       color={`${errors.password ? 'failure' : ''}`}/>
                                </div>
                                <TextInput
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                    color={`${errors.password ? 'failure' : ''}`}
                                    {...register("password",{
                                        required: true,
                                        minLength: 3
                                    })}
                                    helperText={
                                        errors?.password?.type === "required" ? 'Campo obrigatório.' : '' ||
                                        errors?.password?.type === "minLength" ? 'Mínimo 3 caracteres.' : ''
                                    }
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember"/>
                                    <Label htmlFor="remember">Remember me</Label>
                                </div>
                                <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                                    Lost Password?
                                </a>
                            </div>
                            <div className="w-full">
                                <Button type={"submit"} disabled={Object.keys(errors).length > 0}>Login</Button>
                            </div>
                            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered?&nbsp;
                                <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                                    Criar Conta
                                </a>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );

}

export default FormLoginUser;