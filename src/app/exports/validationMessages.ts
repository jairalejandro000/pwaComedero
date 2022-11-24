export const loginValidationMessages = {
    email: [
        { type: 'required', message: 'El email es obligatorio' },
        { type: 'email', message: 'El email no es valido' }
    ],
    password: [
        { type: 'required', message: 'La contraseña es obligatoria' },
        { type: 'minlength', message: 'La contraseña debe tener mínimo 8 caracteres' }
      ]
}