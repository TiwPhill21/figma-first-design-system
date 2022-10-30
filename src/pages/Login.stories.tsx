import { Meta, StoryObj } from '@storybook/react'
import  { within, userEvent, waitFor} from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';
import { Login } from "./Login";

export default{
    title:'Pages/Login',
    component: Login,
    args:{},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/api/login', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login successful'
                    }));
                })
            ]
        },
    },
    
} as Meta

// teste
export const Default: StoryObj = {

    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'vinivicius.testing@testing.com.br');
        userEvent.type(canvas.getByPlaceholderText('**************'), '1234');

        userEvent.click(canvas.getByRole('button'));

        await waitFor(() => {
            return expect(canvas.getByText('Fununciou')).toBeInTheDocument();
        })
    }

}
