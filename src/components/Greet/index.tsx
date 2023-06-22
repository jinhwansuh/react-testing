type Props = {
  name?: string;
};

const Greet = ({ name }: Props) => {
  return <div>Hello {name ? name : 'Guests'}</div>;
};

export default Greet;
