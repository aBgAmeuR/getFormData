# getformdata

A simple utility to extract form data from a FormData object in a type-safe manner, converting empty string values to null.

## Installation

```bash
npm install @abgameur/getformdata
```

or

```bash
yarn add @abgameur/getformdata
```

## Usage

Import the getFormData function in your React project:

```tsx
import getFormData from '@abgameur/getformdata';
```

Use it in your form submit handler to convert FormData to a simple JavaScript object, with empty strings converted to null:

```tsx
import getFormData from '@abgameur/getformdata';

export const MyForm = () => {
  const handleSubmit = (formData: FormData) => {
    const data = getFormData(formData);
    console.log(data); // Process your form data here
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="content" placeholder="Enter content" />
      <button type="submit">Submit</button>
    </form>
  );
};
```

## API
`getFormData(formData: FormData): Record<string, string | null>`

Parameters:

`formData (FormData)`: The FormData object to convert.

Returns:

A `Record<string, string | null>` object where each key corresponds to a form field name, and each value is the field's value as a string or null if the field was empty.

## Contributing

Contributions, issues, and feature requests are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
