interface IProductNameProps {
  productName: string;
  children?: string;
}

function CardDescription({
  productName,
  children,
}: Readonly<IProductNameProps>) {
  return (
    <>
      <div className="text-center">
        <p>{productName}</p>

        <p>{children}</p>
      </div>
    </>
  );
}

export default CardDescription;
