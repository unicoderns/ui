export enum InputTypes {
  Email = 'email',
  Password = 'password',
  Text = 'text',
}

export type InputType = InputTypes.Email | InputTypes.Password | InputTypes.Text
