
export interface Usuario {
    data: Data;
    token: string;
    message?: string;
}

export interface Data {
    id: number;
    username: string;
    password: string;
    nombre: string;
    apellido: string;
    correo: string;
    rol: string;
    createdAt: string;
    updatedAt: string;
}

