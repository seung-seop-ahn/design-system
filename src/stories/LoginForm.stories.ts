import type { Meta, StoryObj } from '@storybook/vue3';

import { userEvent, within, expect } from '@storybook/test';

import { LoginForm } from "../components/LoginForm.tsx";

const meta: Meta<typeof LoginForm> = {
    title: "Forms/LoginForm",
    component: LoginForm,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {
    // render: () => ({
    //     components: { LoginForm },
    //     template: `<LoginForm />`,
    // }),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const emailInput = canvas.getByTestId('email')
        await expect(emailInput).toHaveValue('')

        const passwordInput = canvas.getByTestId('password')
        await expect(passwordInput).toHaveValue('')

        const loginButton = canvas.getByRole('button', { name: 'Login' })
        await expect(loginButton).toBeDisabled()
    },
};

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
    // render: () => ({
    //     components: { LoginForm },
    //     template: `<LoginForm />`,
    // }),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const emailInput = canvas.getByTestId('email')
        await userEvent.type(emailInput, 'test@email.com')

        const passwordInput = canvas.getByTestId('password')
        await userEvent.type(passwordInput, 'random-password')

        const loginButton = canvas.getByRole('button', { name: 'Login' })
        await expect(loginButton).toBeEnabled()
    },
};