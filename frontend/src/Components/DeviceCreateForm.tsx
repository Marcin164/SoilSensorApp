import React from 'react'
import Button from './Common/Button'
import Input from './Common/Input'
import Form from './Common/Form'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    Name: string,
    Name1: string,
    DeviceId: string,
    Password: string
};

const DeviceCreateForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("Name"))

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('Name1')} />
            <Input placeholder="Name" className="my-1" {...register('Name')}/>
            <Input placeholder="Device Id" className="my-1" {...register('DeviceId')}/>
            <Input placeholder="Password" className="my-1" {...register('Password')}/>
            <Button type="submit" title="Save" className="px-4 mt-10 mb-2"/>
        </Form>
    )
}

export default DeviceCreateForm