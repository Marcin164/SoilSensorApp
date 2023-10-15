import ButtonBordered from '../app/_components/Buttons/ButtonBordered'
import ButtonFilled from '../app/_components/Buttons/ButtonFilled'

export default {
  title: 'Buttons',
  component: ButtonBordered,
}

const ButtonBorderedArgs = (args: any) => <ButtonBordered {...args} />
const ButtonFilledArgs = (args: any) => <ButtonFilled {...args} />

export const buttonBordered: any = ButtonBorderedArgs.bind({})
buttonBordered.args = {
  text: 'text',
  disabled: false,
}

export const buttonFilled: any = ButtonFilledArgs.bind({})
buttonFilled.args = {
  text: 'text',
  disabled: false,
}
