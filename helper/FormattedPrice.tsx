  type Props = {
    value: number;
    locale?: string; // varsayılan: fr-FR (boşluklu)
  };
  
  const FormattedPrice = ({
    value,
    locale = "fr-FR", // veya "ru-RU"
  }: Props) => {
    const formatted = new Intl.NumberFormat(locale).format(value);
    return <span>{formatted}</span>;
  };
  
  export default FormattedPrice;
  
  