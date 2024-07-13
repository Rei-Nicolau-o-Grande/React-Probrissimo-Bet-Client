import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

function FormCreateUser() {
    const [openModal, setOpenModal] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setUsername('');
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)} color={"blue"} className={"my-3"} pill>Criar Conta</Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Criar Conta</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="username" value="Usuário"/>
                            </div>
                            <TextInput
                                id="username"
                                type="text"
                                placeholder="Usuário"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email"/>
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="email@email.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Senha"/>
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                placeholder="********"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required/>
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
                            <Button>Criar</Button>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?&nbsp;
                            <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                                Entrar
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );

}

export default FormCreateUser;