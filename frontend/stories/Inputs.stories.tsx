import TextInput from '../app/_components/Inputs/TextInput'
import NumberInput from '../app/_components/Inputs/NumberInput'

export default {
  title: 'Inputs',
  component: TextInput,
}

const TextInputArgs = (args: any) => <TextInput {...args} />
const NumberInputArgs = (args: any) => <NumberInput {...args} />

export const textInput: any = TextInputArgs.bind({})
textInput.args = {
  name: 'name',
  label: 'label',
  className: '',
}

export const numberInput: any = NumberInputArgs.bind({})
numberInput.args = {
  name: 'name',
  label: 'label',
  info: 'info',
  type: 'number',
}
