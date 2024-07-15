import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";

function FormCreateUser() {
    const {
        register,
        handleSubmit,
        formState: { errors},
        reset
    } = useForm();
    const [openModal, setOpenModal] = useState(false);

    const onSubmitCreateUser = (data) => {
    }

    function onCloseModal() {
        setOpenModal(false);
        reset();
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)} color={"blue"} className={"my-3"} pill>Criar Conta</Button>
            <Modal dismissible show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmitCreateUser)}>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Criar Conta</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="username" value="Usuário"
                                       color={`${errors.username ? 'failure' : ''}`}/>
                                </div>
                                <TextInput
                                    id="username"
                                    type="text"
                                    placeholder="Usuário"
                                    color={`${errors.username ? 'failure' : ''}`}
                                    {...register("username", {required: true})}
                                    helperText={
                                        errors?.username?.type === "required" ? 'Campo obrigatório.' : ''
                                    }
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Email"
                                        color={`${errors.email ? 'failure' : ''}`}/>
                                </div>
                                <TextInput
                                    id="email"
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
                                    <Label htmlFor="password" value="Senha"
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
                                <Button type={"submit"} disabled={Object.keys(errors).length > 0}>Criar</Button>
                            </div>
                            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered?&nbsp;
                                <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                                    Entrar
                                </a>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );

}

export default FormCreateUser;