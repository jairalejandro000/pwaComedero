export const loginValidationMessages = {
    email: [
        { type: 'required', message: 'El email es obligatorio' },
        { type: 'pattern', message: 'El email no es valido' }
    ],
    password: [
        { type: 'required', message: 'La contraseña es obligatoria' },
        { type: 'minlength', message: 'La contraseña debe tener mínimo 8 caracteres' }
    ]
}
export const registerValidationMessages = {
    username: [
        { type: 'required', message: 'El usuario es obligatorio' },
        { type: 'minlength', message: 'El usuario debe tener mínimo 3 caracteres' }
    ],
    name: [
        { type: 'required', message: 'El nombre es obligatorio' },
        { type: 'minlength', message: 'El nombre debe tener mínimo 3 caracteres' }
    ],
    lastname: [
        { type: 'required', message: 'Los apellidos son obligatorios' },
        { type: 'minlength', message: 'Los apellidos debe tener mínimo 5 caracteres' }
    ],
    email: [
        { type: 'required', message: 'El email es obligatorio' },
        { type: 'pattern', message: 'El email no es valido' }
    ],
    password: [
        { type: 'required', message: 'La contraseña es obligatoria' },
        { type: 'minlength', message: 'La contraseña debe tener mínimo 8 caracteres' }
    ],
    /*confirm_password: [
        { type: 'required', message: 'La contraseña es obligatoria' },
        { type: 'minlength', message: 'La contraseña debe tener mínimo 8 caracteres' }
    ]*/
}