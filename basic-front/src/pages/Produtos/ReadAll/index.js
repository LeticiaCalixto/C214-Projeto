import { useState } from 'react';
import { toast } from 'react-toastify';
import { MdInventory } from "react-icons/md";

import ClientUsers from '../../../services/user.js';

import Sidebar from '../../../components/SidebarEstoque';
import Title from '../../../components/Title';

import './style.css';

export default function ReadAll() {

    const [users, setUsers] = useState([]);

    async function handleReadAll(e) {
        e.preventDefault();

        const update = await ClientUsers.readAllUsers();

        if (update.status === 200) {
            setUsers(update.data)
            toast.success('Usuários listados com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar todos os produtos">
                    <MdInventory size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleReadAll}>

                        <button type="submit">Listar</button>
                        
                        <div class="table">
                            <table class="fl-table">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users && users.map((user, index) =>
                                        <tr key={index}>
                                            <td>{user.nome} </td>
                                            <td>{user.email} </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}