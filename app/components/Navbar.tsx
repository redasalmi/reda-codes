import { useLoaderData, Form } from 'remix';

export default function Navbar() {
  const theme = useLoaderData<string>();

  return (
    <Form method="post">
      <input type="text" name="theme" value={theme} hidden readOnly />
      <button type="submit">switch</button>
    </Form>
  );
}
