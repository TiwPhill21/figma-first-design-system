import { Meta, StoryObj } from '@storybook/react'
import { Envelope, Lock } from 'phosphor-react'
import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";

export default{
    title:'Components/TextInput',
    component: TextInput.Root,
    args:{
        children:(
                <TextInput.Input placeholder='Type to edit this'/>
        )
    },
    argTypes: {
        children:{
            table:{
                disable: true
            }
        },
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {

}

export const Email: StoryObj<TextInputRootProps> = {
    args:{
        children:[
                <TextInput.Icon>
                    <Envelope/>
                </TextInput.Icon>,
                <TextInput.Input placeholder='Type to edit this'/>
        ]
    },
    argTypes: {
        children:{
            table:{
                disable: true
            }
        },
    }
}

export const Password: StoryObj<TextInputRootProps> = {
    args:{
        children:[
                <TextInput.Icon>
                    <Lock/>
                </TextInput.Icon>,
                <TextInput.Input placeholder='Type to edit this'/>
        ]
    },
    argTypes: {
        children:{
            table:{
                disable: true
            }
        },
    }
}